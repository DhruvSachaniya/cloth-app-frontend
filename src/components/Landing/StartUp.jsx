import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {

    const [values, setvlaues] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    function handlechange(event) {
        const { name, value } = event.target;

        setvlaues({
            ...values,
            [name]: value
        })
    }

    async function handlesubmit(event) {
        event.preventDefault();

        try {
            const response = await axios({
                url: "/auth/Login",
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    email: values.email,
                    password: values.password
                })
            });
            if (response.data.token) {
                localStorage.setItem("jwt_token", response.data.token);
                toast.success(response.data.message);
                navigate("/Home", { replace: true });
            } else {
                toast.error(response.data.message);
            }
            setvlaues({
                email: "",
                password: ""
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div class="bg-0">
            <div class="bg-1">
                <div class="bg-img">
                    <img src="D:/Cloth-App-Frontend/cloth-frontend/public/shopping-image-2.png" alt="img" />
                </div>
                <div class="bg-body">
                    <div>
                        <h1>Welcome to Cloth-App</h1>
                        <h2 style={{ color: "#87C4FF" }}>Ship Smarter Today</h2>
                    </div>
                    <div>
                        <form onSubmit={handlesubmit}>
                            <div class="input-container">
                                <i class="fa fa-envelope icon"></i>
                                <input class="input-field" value={values.email}
                                    onChange={handlechange} type="text" placeholder="Email" name="email" />
                            </div>
                            <div class="input-container">
                                <i class="fa fa-key icon"></i>
                                <input class="input-field" value={values.password}
                                    onChange={handlechange} type="password" placeholder="Password" name="password" />
                            </div>
                            <p>Don't have an aacount? <a href="/register" style={{ color: "#39A7FF", textDecoration: "none" }}>Sign in</a></p>
                            <button type='submit' class="bg-btn">Login</button>
                        </form>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
}