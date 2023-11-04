import axios from "axios";
import { toast } from "react-toastify";

export default function AddToWishlist (props) {
    return(
        <button 
        onClick={() => {
            axios({
                url: "/wishlist",
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
                if(res) {
                    toast.success("Added to Wishlist!");
                }
            })
        }}
        type="submit">Add To WishList</button>
    );
}