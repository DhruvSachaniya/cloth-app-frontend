import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage () {

    const [ values , setvlaues ] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    function handlechange (event) {
        const { name, value } = event.target;

        setvlaues({
            ...values,
            [name]: value
        })
    }

    async function handlesubmit (event) {
        event.preventDefault();

        try {
            const responce  =  await axios({
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
            if(responce.status === 200) {
                localStorage.setItem("jwt_token", responce.data.token);
                toast.success("Login successful!");
            }
            setvlaues({
                email: "",
                password: ""
            })
            navigate("/Home", {replace: true});
        } catch(error) {
            console.log(error);
        }
    }

    return(
        
        <div className="Login-back">
            <div className="grid-container">
                <div className="grid-item Login-heading">
                    <h1>Welcome!</h1>
                    <p>An online commerce platform offering a wide range of products, seamless shopping experiences, and secure transactions for all your shopping needs.</p>
                </div>
                <div className="grid-item">
                    <form onSubmit={handlesubmit} className="login-form">
                        <h1>Login</h1>
                        <TextField
                        value={values.email}
                        onChange={handlechange}
                        type='email' 
                        name='email'
                        id="outlined-basic" 
                        label="Email"
                        variant="outlined" 
                        color="secondary"
                        InputProps={{
                            style: {
                            color: '#FE7BE5',
                            backgroundColor: 'transparent',
                            
                            },
                        }}
                        />

                        <br/>

                        <TextField
                        value={values.password}
                        onChange={handlechange}
                        type="password" 
                        name='password'
                        id="outlined-password-input"
                        label="Password"
                        autoComplete="current-password"
                        color="secondary"
                        />
                        <br/>

                        <Button type='submit' variant="contained" color="secondary">Login</Button>

                        <p>Don't have an account? <Link to='/Register'>Sign up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}