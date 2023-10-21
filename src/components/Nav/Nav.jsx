import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import GradingIcon from '@mui/icons-material/Grading';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { useState } from 'react';

export default function Nav() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMouseOverCart, setIsMouseOverCart] = useState(false);
    return (
        <>
            <header>
                <h3 className="nav-title"><a href="/Home">Cloth-App</a></h3>
                <nav>
                    <ul>
                        <li><NightlightIcon/></li>
                        <li><a href="#" title='your order'><GradingIcon /></a></li>
                        <li><a href="#" title='wishList'><FolderSpecialIcon /></a></li>
                        <li
                            className="cart-icon"
                            onMouseOver={() => setIsMouseOverCart(true)}
                            onMouseOut={() => setIsMouseOverCart(false)}
                        >
                            <a href="#" title="Cart">
                                YourCart
                            </a>
                            {isMouseOverCart || isCartOpen ? (
                                <div
                                    className="mini-cart"
                                    onMouseEnter={() => setIsCartOpen(true)}
                                    onMouseLeave={() => setIsCartOpen(false)}
                                >
                                    <p>Your Cart Items</p>
                                    {/* Add cart items here */}
                                </div>
                            ) : null}
                        </li>
                        <li><a href="#" title='Your Account'><PersonIcon /></a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}