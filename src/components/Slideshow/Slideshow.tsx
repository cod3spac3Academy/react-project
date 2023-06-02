import classes from "./Slideshow.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Slide1 from "../../assets/slider_01.jpg";
import Slide2 from "../../assets/slider_02.jpg";
import Slide3 from "../../assets/slider_03.jpg";

const Slideshow = (): JSX.Element => {

    const images = [Slide1, Slide2, Slide3];
    const description = ["CONVENTIONAL FOOD", "OUTSTANDING DINING", "WONDERFUL CUISINE"];
    const title = ["MORNING MOVEMENT", "DELICIOUS COOKING", "AUTHENTIC KITCHEN"];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageLoad, setImageLoad] = useState(false);

    const handleOnLoad = () => {
        setImageLoad(true);
    }

    // const handleOnLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    //     (e.target as HTMLImageElement).style.transform="translateX(10%)";
    // }

    const handleClickLeft = () => {
        setCurrentIndex(currentIndex - 1);
        if (currentIndex === 0) {
            setCurrentIndex(2);
        }
    }
    const handleClickRight = () => {
        setCurrentIndex(currentIndex + 1);
        if (currentIndex === 2) {
            setCurrentIndex(0);
        }
        setImageLoad(true);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleClickRight();
            // handleOnLoad(handleClickRight());
        }, 5000);
        return () => clearInterval(interval); //  Función de desmontaje: cuando se desmonta el componente, se limpia el intervalo para que no haya fugas de memoria.
    }, [currentIndex]);

    return (
        <>
            <div className={classes.slideshow}>
                {/* <img className={classes.image} src={images[currentIndex]} alt={description[currentIndex]} onLoad={(e) => {(e.target as HTMLImageElement).style.transform="translateX(30%)"}}/> */}
                {imageLoad && <img className={imageLoad ? classes.image : classes.loaded} src={images[currentIndex]} alt={description[currentIndex]} onLoad={handleOnLoad}/>}
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