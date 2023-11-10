import axios from "axios";
import { useEffect, useState } from "react"

export default function WishListWindow() {
    const [getData, setData] = useState(null);

    const mystyle = {
        right: "170px"
      };

    useEffect(() => {
        async function fetchWishList() {
            const response = await axios({
                url: "/wishlist",
                method: "get",
                headers: {
                    "Authorization": localStorage.getItem("jwt_token")
                }
            })
            if (response) {
                setData(response.data);
            }
        }

        fetchWishList();
    }, []);

    return (
        <div className="mini-cart" style={mystyle}>
            {getData && getData.items ? (
                <>
                    <p>your WishList</p>
                    <ul>
                    {getData.items.map((product_Id) => 
                        <li>Items: {product_Id}</li>
                    )}
                    </ul>
                </>
            ) : (
                <p>Your WishList is Empty</p>
            )}
        </div>
    )
}