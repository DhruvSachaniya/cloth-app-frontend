import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LoginPage () {
    return(
        <div className="Login-back">
            <div className="grid-container">
                <div className="grid-item Login-heading">
                    <h1>Welcome!</h1>
                    <p>An online commerce platform offering a wide range of products, seamless shopping experiences, and secure transactions for all your shopping needs.</p>
                </div>
                <div className="grid-item">
                    <form className="login-form">
                        <h1>Login</h1>
                        <TextField
                        className='customTextField ' 
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
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        color="secondary"
                        />
                        <br/>

                        <Button variant="contained" color="secondary">Login</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}