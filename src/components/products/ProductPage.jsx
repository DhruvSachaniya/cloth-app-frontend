import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Nav from "../Nav/Nav";

export default function ProductPage() {
    
    const { productId } = useParams();
    const [ product, setproduct ] = useState([]);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await axios.get(`/productinfo/${productId}`, {
                    headers: {
                        'Authorization': localStorage.getItem('jwt_token')
                    }
                });
                
                if(response) {
                    setproduct(response.data);
                    if(response.data.token) {
                        console.log(response.data);
                        setproduct(response.data);
                    } 
                    if(response.status === 500) {
                        toast.error(response.data.message);
                    }
                }
            } catch(error) {
                console.log(error);
            }
        }

        fetchProduct();
    }, [productId]);
    
    return(
        <div>
            <Nav/>
            <div>
                <h1>{product.price}</h1>
            </div>
        </div>
    );
}