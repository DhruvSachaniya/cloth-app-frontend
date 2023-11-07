import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import AddToCart from "../Cart/AddtoCart";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import { toast } from "react-toastify";

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
                    <div className="card-header">
                        <Link to={`/productinfo/${product._id}`}>
                            <div className="card-img">
                                <img src={"http://localhost:5000/" + product.fileURL} alt={product.title} />
                            </div>
                        </Link>
                        <div className="card-wishlist">
                            <div className="card-wishlit-2" onClick={() => {
                                axios({
                                    url: "/wishlist",
                                    method: "post",
                                    headers: {
                                        "Authorization": localStorage.getItem("jwt_token"),
                                        "Content-Type": "application/json"
                                    },
                                    data: JSON.stringify({
                                        productid: product._id
                                    })
                                })
                                    .then((res) => {
                                        toast.success("Added to Wishlist!");
                                    })
                            }}>
                                <FavoriteBorderOutlined />
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="card-title">{product.title}</div>
                        <div className="card-price">${product.price}</div>
                        {/* <button className="card-button">Add to Cart</button> */}
                        <AddToCart id={product._id} />
                    </div>
                </div>
            ))}
        </div>
    );
}
