import { useNavigate } from "react-router-dom"

export default function Checkout () {
    const navigate = useNavigate();
    return(
        <button 
            onClick={() => {
                navigate("/checkout");
            }}
        
        type="submit">Checkout</button>
    )
}