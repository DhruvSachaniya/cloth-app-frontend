import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import AddToCart from "../Cart/AddtoCart";

export default function HomeProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get('/products', {
                    headers: {
                        "Authorization": localStorage.getItem("jwt_token")
                    }
                });

                if (response.status === 200) {
                    setProducts(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div className="grid-cont">
            {products.map(product => (
                    <div className="card" key={product._id}>
                        <Link to={`/productinfo/${product._id}`}>
                        <div className="card-header">
                            <img src={"http://localhost:5000/" + product.fileURL} alt={product.title} />
                        </div>
                        </Link>
                        <div className="card-body">
                            <div className="card-title">{product.title}</div>
                            <div className="card-price">${product.price}</div>
                            {/* <button className="card-button">Add to Cart</button> */}
                            <AddToCart id={product._id}/>
                        </div>
                    </div>
            ))}
        </div>
    );
}
