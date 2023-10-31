import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
        if (GetData) {
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
            {GetData ? (
                <div className="cart-h1">
                    <h2>Shopping Cart</h2>
                    <hr />
                    {GetProductCart.map((product, index) => (
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
                            </div>
                        </div>
                    ))}
                    <hr />
                    <div className="cart-h2">
                        <h3>Subtotal({GetData.items.length} items): ${GetData.subtotal}</h3>
                        <button>Checkout</button>
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
