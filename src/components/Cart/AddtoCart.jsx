import axios from "axios";
import { toast } from "react-toastify";

export default function AddToCart (props) {
    return(
        <>
            <button className="card-button"
            onClick={() => {
                axios({
                    url: "/cart",
                    method: "post",
                    headers: {
                        "Authorization": localStorage.getItem("jwt_token"),
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify({
                        productid: props.id
                    })
                })
                .then((res) => {
                    toast.success(res);
                })
            }}
            type="submit">Add to Cart</button>
        </>
    );
}