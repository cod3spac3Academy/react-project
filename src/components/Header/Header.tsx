import classes from "./Header.module.css";
import blackLogo from "../../assets/black-logo.webp";
import whiteLogo from "../../assets/white-logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const Header = (): JSX.Element => {

    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = (event: React.MouseEvent): void => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <header>
        <img src={blackLogo} alt="Logo LITHO" />
        {isOpen ? <img src={blackLogo} alt="Logo LITHO" /> : <img src={whiteLogo} alt="Logo LITHO" />}
        <FontAwesomeIcon icon={faBars} onClick={handleClick} />
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
        </>
    );
};

export default Header;