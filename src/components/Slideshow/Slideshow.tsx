import classes from "./Slideshow.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Slide1 from "../../assets/slider_01.jpg";
import Slide2 from "../../assets/slider_02.jpg";
import Slide3 from "../../assets/slider_03.jpg";

const Slideshow = (): JSX.Element => {

    const images:string[] = [Slide1, Slide2, Slide3];
    const description:string[] = ["CONVENTIONAL FOOD", "OUTSTANDING DINING", "WONDERFUL CUISINE"];
    const title:string[] = ["MORNING MOVEMENT", "DELICIOUS COOKING", "AUTHENTIC KITCHEN"];

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleClickLeft = () : void => {
        setCurrentIndex(currentIndex - 1);
        if (currentIndex === 0) {
            setCurrentIndex(2);
        }
    }

    const handleClickRight = () : void => {
        setCurrentIndex(currentIndex + 1);
        if (currentIndex === 2) {
            setCurrentIndex(0);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleClickRight();
        }, 5000);
        
        return () => {
            clearInterval(interval);
        }; //  Función de desmontaje: cuando se desmonta el componente, se limpia el intervalo para que no haya fugas de memoria.
    }, [currentIndex]);

    return (
        <>
            <div className={classes.slidershow}>
                    <img className={classes.image} src={images[currentIndex]} alt={description[currentIndex]}/>
                    <div className={classes.slider}>
                        <FontAwesomeIcon icon={faArrowLeftLong} className={classes.arrow} onClick={handleClickLeft}/>
                        <div className={classes.sliderInfo}>
                            <h4>{description[currentIndex]}</h4>
                            <h2>{title[currentIndex]}</h2>
                            <button>DISCOVER MORE</button>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} className={classes.arrow} onClick={handleClickRight}/>
                    </div>
            </div>                
        </>
    )
}

export default Slideshow;