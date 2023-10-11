import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function RegisterPage () {

    const [ values, setvlaues ] = useState({
        username: "",
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
            if(response.status === 200) {
                toast.success(response.data.message);
                navigate("/", {replace: true});
            } 
            if(response.status === 201) {
                toast.error(response.data.message);
            }
            setvlaues({
                username: "",
                email: "",
                password: ""
            })
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
                        <h1>Register</h1>
                        <TextField
                        value={values.username}
                        onChange={handlechange} 
                        id="outlined-basic" 
                        label="Username" 
                        variant="outlined" 
                        name='username'
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
                        value={values.email}
                        onChange={handlechange} 
                        id="outlined-basic" 
                        label="Email"
                        type='email' 
                        variant="outlined" 
                        name='email'
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
                        id="outlined-password-input"
                        label="Password"
                        name='password'
                        type="password"
                        autoComplete="current-password"
                        color="secondary"
                        />
                        <br/>

                        <Button type='submit' variant="contained" color="secondary">Sign up</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}