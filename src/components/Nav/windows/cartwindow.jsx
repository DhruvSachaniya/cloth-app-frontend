import axios from "axios";
import { useEffect, useState } from "react";

export default function CartWindow() {
    const [getCartValues, setCartValues] = useState(null);

    useEffect(() => {
        async function fetchCartDetails() {
            const response = await axios({
                url: "/cart",
                method: "get",
                headers: {
                    "Authorization": localStorage.getItem("jwt_token")
                }
            });
            if (response) {
                setCartValues(response.data);
            }
        }
        fetchCartDetails();
    }, []);

    return (
        <div className="mini-cart">
            {getCartValues ? (
                <>
                    <p>Your Cart</p>
                    <ul>
                        {getCartValues.items.map((productId) => (
                            <li key={productId}>
                                Product ID: {productId} 
                            </li>
                        ))}
                    </ul>
                    <p>Subtotal: ${getCartValues.subtotal}</p>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
} 