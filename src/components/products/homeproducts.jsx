import { useEffect, useState } from "react";
import axios from "axios";

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
                    console.log(response.data);
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
                    <div className="card-header">
                        <img src={"http://localhost:5000/"+product.fileURL} alt={product.title} />
                    </div>
                    <div className="card-body">
                        <div className="card-title">{product.title}</div>
                        <div className="card-price">${product.price}</div>
                        <button className="card-button">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
