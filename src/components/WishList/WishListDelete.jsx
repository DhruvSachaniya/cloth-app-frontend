import axios from "axios";
import { toast } from "react-toastify";

export default function DeleteWishlistItems (props) {
    return(
        <button 
        onClick={() => {
            axios({
                url: "/wishlist",
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
                if(res) {
                toast.success("remove Wishlit Item!");
            }
            })
        }}
        type="submit">Delete</button>
    );
}