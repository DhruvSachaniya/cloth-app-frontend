import axios from "axios";
import { useEffect, useState } from "react";

export default function OrderFramePage() {

    const [GetData, SetData] = useState(null);

    const mystyle = {
        padding: "10px",
        display: "grid",
        gridTemplateColumns: "1fr",
        alignItems: "center",
        justifyItems: "center",
    };

    useEffect(() => {
        async function fetchOrderData() {
            const response = await axios({
                url: "/order",
                method: "get",
                headers: {
                    "Authorization": localStorage.getItem("jwt_token")
                }
            })
            if (response) {
                if (response.status === 200) {
                    SetData(response.data);
                }
            }

        }
        fetchOrderData();
    }, [])

    return (
        <>
            <div className="cart-container">
                {GetData && GetData.items ? (
                <div className="cart-h1">
                    <h1>Orders</h1>
                    <hr />
                    <div className="cart-grid">
                            <h2>you have no order</h2>
                    </div>
                </div>
                    ): (
                        <div className="cart-h1">
                            <h2>Orders</h2>
                            <hr />
                            <div className="cart-grid" style={mystyle}>
                                <h1>you have no order</h1>
                            </div>
                        </div>
                )}
            </div>
        </>
    );
}