import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DeleteCartItems from "./CartDelete";

export default function CartProductPage() {
    const [GetData, SetData] = useState(null);
    const [GetProductCart, SetProductCart] = useState([]);

    const mystyle = {
        padding: "10px",
        display: "grid",
        gridTemplateColumns: "1fr",
        alignItems: "center",
        justifyItems: "center",
    };

    const img_style = {
        height: "200px",
    };

    useEffect(() => {
        try {
            async function fetchCart() {
                const response = await axios({
                    url: "/cart",
                    method: "get",
                    headers: {
                        "Authorization": localStorage.getItem("jwt_token"),
                    },
                });
                if (response && response.status === 200) {
                    SetData(response.data);
                }
            }
            fetchCart();
        } catch (error) {
            toast.error(error);
        }
    }, []);

    useEffect(() => {
        if (GetData && GetData.items) {
            const response_2 = GetData.items.map((productId) => {
                return axios({
                    url: `/productinfo/${productId}`,
                    method: "get",
                    headers: {
                        "Authorization": localStorage.getItem("jwt_token"),
                    },
                });
            });
            Promise.all(response_2)
                .then((ProductResponse) => {
                    const productData = ProductResponse.map((res) => res.data);
                    SetProductCart(productData);
                })
                .catch((error) => {
                    toast.error(error);
                });
        }
    }, [GetData]);

    return (
        <div className="cart-container">
            {GetData && GetData.items ? (
                <div className="cart-h1">
                    <h2>Shopping Cart</h2>
                    <hr />
                    {GetProductCart.length > 0 ? (
                        GetProductCart.map((product, index) => (
                        <div className="cart-grid" key={GetData.items[index]}>
                            <div className="cart-img">
                                <img style={img_style} src={`http://localhost:5000/${product.fileURL}`} alt={product.title} />
                            </div>
                            <div>
                                <h1 className="item-name">{product.title}</h1>
                                <p>{product.description}</p>
                                <p className="item-price">$ {product.price}</p>
                                {/* quantity */}
                                {/* delete option */}
                                {/* link to product page */}
                                <DeleteCartItems id={GetData.items[index]} />
                            </div>
                        </div> 
                    ))): null}
                    <hr />
                    <div className="cart-h2">
                        {GetData && GetData.items ? (
                            <>
                                <h3>Subtotal({GetData.items.length} items): ${Math.floor(GetData.subtotal)}</h3>
                                <button>Checkout</button>
                            </>
                        ) : (
                            <h3>Subtotal: $0.00</h3>
                        )}
                    </div>

                </div>
            ) : (
                <div className="cart-h1">
                    <h2>Shopping Cart</h2>
                    <hr />
                    <div className="cart-grid" style={mystyle}>
                        <h1>your cart is empty!</h1>
                    </div>
                </div>
            )}
        </div>
    );
}
