import axios from "axios";
import { useEffect, useState } from "react";

export default function OrderWindow () {
    const [ getData, setData ] = useState(null);

    const mystyle = {
        right: "230px"
    };
    
    useEffect(() => {
        async function fetchOrderDetails () {
            const response = await axios({
                url: "/order",
                method: "get",
                headers: {
                    "Authorization": localStorage.getItem("jwt_token")
                }
            })
            if(response.status === 200) {
                setData(response.data);
            }
        }

        fetchOrderDetails();
    }, []);
    
    return(
        <div className="mini-cart" style={mystyle}>
        {getData ? (
            <>
            {!getData.meassage ? (
                <>
                <p>Your Order</p>
                <ul>
                {getData.items.map((product_Id) => 
                    <li>Items: {product_Id}</li>
                )}
                </ul>
                </>
            ) : (
                <p>{getData.meassage}</p>
            )}
            </>
        ) : (
            <>
                <p>not Found</p>
            </>
        )}
        </div>
    );
}