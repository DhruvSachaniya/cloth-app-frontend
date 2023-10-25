import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import GradingIcon from '@mui/icons-material/Grading';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { useState } from 'react';
import CartWindow from './windows/cartwindow';
import WishListWindow from './windows/wishlistwindow';
import OrderWindow from './windows/orderwindow';

export default function Nav() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMouseOverCart, setIsMouseOverCart] = useState(false);
    const [isMouseOverOrder, setIsMouseOverOrder] = useState(false);
    const [isMouseOverWishList, setIsMouseOverWishList] = useState(false);
    return (
        <>
            <header>
                <h3 className="nav-title"><a href="/Home">Cloth-App</a></h3>
                <nav>
                    <ul>
                        <li><NightlightIcon/></li>
                        <li 
                            className='cart-icon'
                            onMouseOver={() => setIsMouseOverOrder(true)}
                            onMouseOut={() => setIsMouseOverOrder(false)}
                        >
                            <a href="#" title='your order'>
                                <GradingIcon />
                            </a>
                            {isMouseOverOrder ? (
                                <OrderWindow/>
                            ): null}
                        </li>
                        <li
                            className='cart-icon'
                            onMouseOver={() => setIsMouseOverWishList(true)}
                            onMouseOut={() => setIsMouseOverWishList(false)}
                        >
                            <a href="#" title='wishList'>
                                <FolderSpecialIcon />
                            </a>
                            {isMouseOverWishList ? (
                                <WishListWindow/>
                            ): null}
                        </li>
                        <li
                            className="cart-icon"
                            onMouseOver={() => setIsMouseOverCart(true)}
                            onMouseOut={() => setIsMouseOverCart(false)}
                        >
                            <a href="#" title="Cart">
                                YourCart
                            </a>
                            {isMouseOverCart || isCartOpen ? (
                                <CartWindow/>
                            ) : null}
                        </li>
                        <li><a href="#" title='Your Account'><PersonIcon /></a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}