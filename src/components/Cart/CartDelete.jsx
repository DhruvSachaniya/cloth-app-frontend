import axios from "axios";
import { toast } from "react-toastify";

export default function DeleteCartItems (props) {
    return(
        <button
        onClick={() => {
            axios({
                url: "/cart",
                method: "delete",
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
        type="submit">Delete</button>
    );
}