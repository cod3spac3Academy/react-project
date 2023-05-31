import classes from "./Header.module.css";
import {useState} from "react";

const Header = (): JSX.Element => {

    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div><img src="../../assets/black-logo.webp" alt="Logo LITHO" /></div>
            {isOpen ? <img src="../../assets/black-logo.webp" alt="Logo LITHO" /> : <img src="../../assets/white-logo.webp" alt="Logo LITHO" />}
            <nav className={isOpen ? classes.open : ""}>
                <ul>
                    <li>Home</li>
                    <li>Pages</li>
                    <li>Portfolio</li>
                    <li>Elements</li>
                    <li>Features</li>
                    <li>Blog</li>
                    <li>Shop</li>
                </ul>
            </nav>
            <div className={classes.icons}>
                
            </div>
        </header>
    );
};

export default Header;