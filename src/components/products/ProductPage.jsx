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
        <>
            <Nav/>
            <div className="product-container">
                <div className="product-card">
                    <div className="product-head">
                        <img src={"http://localhost:5000/"+ product.fileURL} alt={product.title} />
                    </div>
                    <div className="product-body">
                        <div className="product-box">
                            <h1 className="item-name">{product.title}</h1>
                            <p>{product.title}</p>
                            <hr/>
                            <p>{product.description}</p>
                            <p className="item-price">$ {product.price}</p>
                        </div>
                        <div className="item-customise">
                            <label>Quntity</label>
                            <br></br>
                            <input autocomplete="on" step="step" min="1" pattern="[0-9]" type="number" disabled="" name="quantity" placeholder="Product Quantity" class="input-number" value="1"></input>
                            <span></span>
                        </div>
                        <div className="item-actions">
                            <button className="card-button">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}