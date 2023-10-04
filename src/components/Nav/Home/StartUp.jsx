export default function LoginPage () {
    return(
        <div className="Login-back">
            <div className="Login-form">
                <div className="Login-heading">
                    <h1>Welcome!</h1>
                    <p>this is a e comerce website</p>
                </div>
                <div className="form">
                    {/* <form> */}
                        <h1>Login</h1>
                        <input
                        type="text"
                        name="username"
                        placeholder="username"
                        />
                        <br/>
                        <input
                        type="password"
                        name="password"
                        placeholder="password"
                        />
                        <br/>
                        <button type="submit">Login</button>
                    {/* </form> */}
                </div>
            </div>
        </div>
    );
}