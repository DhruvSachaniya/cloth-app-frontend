import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function CartProductPage() {

    const [GetData, SetData] = useState(null);

    const mystyle = {
        padding: "10px",
        display: "grid",
        gridTemplateColumns: "1fr",   
        alignItems: "center",       
        justifyItems: "center",    
    };
    

    useEffect(() => {
        try {
            async function fetchCart() {
                const response = await axios({
                    url: "/cart",
                    method: "get",
                    headers: {
                        "Authorization": localStorage.getItem("jwt_token")
                    }
                })
                if (response) {
                    if (response.status === 200) {
                        SetData(response.data);
                        console.log(GetData);
                    }
                }
            }
            fetchCart();
        } catch (error) {
            toast.error(error);
        }
    }, []);


    return (
        <div className="cart-container">
        {GetData ? (
            <div className="cart-h1">
                <h2>Shopping Cart</h2>
                <hr />
                {GetData.items.map((productId) => (
                <div className="cart-grid" key={productId}>
                    <div className="cart-img">
                        <img></img>
                    </div>
                    <div>Id: {productId}</div>
                </div>
                ))}
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