import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import GradingIcon from '@mui/icons-material/Grading';

export default function Nav () {
    return(
        <>
        <header>
            <h3 className="nav-title"><a href="/Home">Cloth-App</a></h3>
            <nav>
                <ul>
                    <li><a href="#" title='your order'><GradingIcon/></a></li>
                    <li><a href="#" title='wishList'><FolderSpecialIcon/></a></li>
                    <li><a href="#" title='Cart'><ShoppingBagIcon/></a></li>
                    <li><a href="#" title='Your Account'><PersonIcon/></a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}