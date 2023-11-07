import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function AddToWishlist (props) {
    return(
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
            toast.success("Added to Wishlist!");
        })
    );
}