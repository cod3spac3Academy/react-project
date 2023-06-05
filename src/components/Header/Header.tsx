import classes from "./Header.module.css";
import blackLogo from "../../assets/black-logo.webp";
import whiteLogo from "../../assets/white-logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {useState} from "react";

const Header = (): JSX.Element => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const handleClick = (event: React.MouseEvent): void => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <header>
            <div className={classes.header}>
                <img className={classes.logoBlack} src={blackLogo} alt="Logo LITHO" />            
                <img className={classes.logoWhite} src={whiteLogo} alt="Logo LITHO" />            
                <nav className={classes.menuFullScreen}>
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
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTwitter} />
                    {isOpen ? <FontAwesomeIcon icon={faXmark} className={classes.menuIcon} onClick={handleClick}/> : <FontAwesomeIcon icon={faBars} className={classes.menuIcon} onClick={handleClick} />}
                </div>
            </div>

            {isOpen ? (<div>
                <nav className={classes.menu}>
                    <ul>
                        <li>Home<FontAwesomeIcon icon={faChevronDown} className={classes.chevron}/></li>
                        <li>Pages<FontAwesomeIcon icon={faChevronDown} className={classes.chevron}/></li>
                        <li>Portfolio<FontAwesomeIcon icon={faChevronDown} className={classes.chevron}/></li>
                        <li>Elements<FontAwesomeIcon icon={faChevronDown} className={classes.chevron}/></li>
                        <li>Features<FontAwesomeIcon icon={faChevronDown} className={classes.chevron}/></li>
                        <li>Blog<FontAwesomeIcon icon={faChevronDown} className={classes.chevron}/></li>
                        <li>Shop<FontAwesomeIcon icon={faChevronDown} className={classes.chevron}/></li>
                    </ul>
                </nav>
            </div>) : null}

        </header>
        </>
    );
};

export default Header;