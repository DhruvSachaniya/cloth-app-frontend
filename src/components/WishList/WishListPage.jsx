import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddToCart from "../Cart/AddtoCart";
import DeleteWishlistItems from "./WishListDelete";

export default function WishListProductPage() {

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
            async function fetchWishList() {
                const response = await axios({
                    url: "/wishlist",
                    method: "get",
                    headers: {
                        "Authorization": localStorage.getItem("jwt_token")
                    }
                })
                if (response && response.status === 200) {
                    SetData(response.data);
                }
            }
            fetchWishList();
        } catch (error) {
            toast.error(error);
        }
    }, [])

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
                    <h1>WishList</h1>
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
                                    <AddToCart id={GetData.items[index]}/> <DeleteWishlistItems id={GetData.items[index]}/>
                                </div>
                            </div>
                        ))) : null}
                </div>
            ) : (
                <div className="cart-h1">
                    <h2>WishList</h2>
                    <hr />
                    <div className="cart-grid" style={mystyle}>
                        <h1>your WishList is empty!</h1>
                    </div>
                </div>
            )}
        </div>
    );
}