import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

export default function AccountWindow () {
    const navigate = useNavigate();

    function handleLogout () {
        localStorage.removeItem("jwt_token")
        navigate("/", {replace: false});
    }
    
    
    return(
        <div className="profile-mini-cart">
            <div className="profile-mini-cart-1">
                <span><AccountCircleIcon/></span> 
                <p> your profile</p>
            </div>
            <div className="profile-mini-cart-2">
                <span><SettingsIcon/></span>
                <p> Settings</p>
            </div>
            <div className="profile-mini-cart-3" onClick={handleLogout}>
                <span><LogoutIcon/></span>
                <p>Logout</p>
            </div>
        </div>
    );
}