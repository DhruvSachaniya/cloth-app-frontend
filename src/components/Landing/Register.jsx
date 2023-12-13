import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function RegisterPage() {

    const [values, setvlaues] = useState({
        username: "",
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
                url: "auth/register",
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    username: values.username,
                    email: values.email,
                    password: values.password
                })
            });
            if (response.status === 200) {
                toast.success(response.data.message);
                navigate("/", { replace: true });
            }
            if (response.status === 201) {
                toast.error(response.data.message);
            }
            setvlaues({
                username: "",
                email: "",
                password: ""
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div class="bg-0">
            <div class="bg-1">
                <div class="bg-img">
                    <img src={"/images/shopping-image-2.png"} alt="img" />
                </div> 
                <div class="bg-body">
                    <div>
                        <h1>Welcome to Cloth-App</h1>
                        <h2 style={{ color: "#87C4FF" }}>Ship Smarter Today</h2>
                    </div>
                    <div>
                        <form onSubmit={handlesubmit}>
                            <div class="input-container">
                                <i class="fa fa-user icon"></i>
                                <input class="input-field" value={values.username}
                                    onChange={handlechange} type="text" placeholder="Username" name="username" />
                            </div>
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
                            <button type='submit' class="bg-btn">sign in</button>
                        </form>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
}