import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NightlightIcon from '@mui/icons-material/Nightlight';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useState } from 'react';
import CartWindow from './windows/cartwindow';
import WishListWindow from './windows/wishlistwindow';
import OrderWindow from './windows/orderwindow';
import AccountWindow from './Account/accountwindow';

export default function Nav() {
    const [darkmode, setdarkmode] = useState(false);

    const toggleDarkMode = () => {
        setdarkmode(!darkmode);
        document.body.style.backgroundColor = darkmode ? "#212529" : "transparent"
        document.body.style.color = darkmode ? "#adb5bd" : "black";
    };
    const [isMouseOverCart, setIsMouseOverCart] = useState(false);
    const [isMouseOverOrder, setIsMouseOverOrder] = useState(false);
    const [isMouseOverWishList, setIsMouseOverWishList] = useState(false);
    const [isMOuseOverProfile, setIsMouseOverProfile] = useState(false);
    return (
        <>
            <header>
                <h3 className="nav-title"><a href="/Home">Cloth-App</a></h3>
                <nav>
                    <ul>
                        <li onClick={toggleDarkMode}
                        >{darkmode ? <DarkModeOutlinedIcon/> : <NightlightIcon/>}</li>
                        <li 
                            onMouseOver={() => setIsMouseOverOrder(true)}
                            onMouseOut={() => setIsMouseOverOrder(false)}
                        >
                            <a href="/order" title='your order'>
                                Orders
                            </a>
                            {isMouseOverOrder ? (
                                <OrderWindow/>
                            ): null}
                        </li>
                        <li
                            onMouseOver={() => setIsMouseOverWishList(true)}
                            onMouseOut={() => setIsMouseOverWishList(false)}
                        >
                            <a href="/wishlist" title='wishList'>
                                <FavoriteBorderOutlinedIcon/>
                            </a>
                            {isMouseOverWishList ? (
                                <WishListWindow/>
                            ): null}
                        </li>
                        <li
                            onMouseOver={() => setIsMouseOverCart(true)}
                            onMouseOut={() => setIsMouseOverCart(false)}
                        >
                            <a href="/cart" title="Cart">
                                <ShoppingCartOutlinedIcon/>
                            </a>
                            {isMouseOverCart ? (
                                <CartWindow/>
                            ) : null}
                        </li>
                        <li
                            onMouseOver={() => setIsMouseOverProfile(true)}
                            onMouseOut={() => setIsMouseOverProfile(false)}
                        >
                            <a href="#" title='Your Account'>
                                <PersonIcon/>
                            </a>
                            {isMOuseOverProfile ? (
                                <AccountWindow/>
                            ): null}
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}