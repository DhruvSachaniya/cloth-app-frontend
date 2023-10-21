// CartWindow.js
import React from 'react';

const CartWindow = () => {
    return (
        <div className="cart-window">
            {/* Add your cart content here */}
            <h3>Your Cart</h3>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                {/* Add more items here */}
            </ul>
            <button>Checkout</button>
        </div>
    );
};

export default CartWindow;
