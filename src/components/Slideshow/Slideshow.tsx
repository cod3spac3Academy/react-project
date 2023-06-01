import classes from "./Slideshow.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Slide1 from "../../assets/slider_01.jpg";
import Slide2 from "../../assets/slider_02.jpg";
import Slide3 from "../../assets/slider_03.jpg";

const Slideshow = (): JSX.Element => {

    const images = [Slide1, Slide2, Slide3];
    const description = ["CONVENTIONAL FOOD", "OUTSTANDING DINNER", "WONDERFUL CUISINE"];
    const title = ["MORNING MOVEMENT", "DELICIOUS COOKING", "AUTHENTIC KITCHEN"];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickLeft = () => {
        setCurrentIndex(currentIndex - 1);
        if (currentIndex === 0) {
            setCurrentIndex(0);
        }
    }
    const handleClickRight = () => {
        setCurrentIndex(currentIndex + 1);
        if (currentIndex === 2) {
            setCurrentIndex(0);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleClickRight();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <>
            <div className={classes.slideshow}>
                <div className={classes.slider1}>
                    <div className={classes.sliderGeneral}>
                        <FontAwesomeIcon icon={faArrowLeftLong} onClick={handleClickLeft}/>
                        <div className={classes.sliderInfo}>
                            <img className={classes.image} src={images[currentIndex]} alt={description[currentIndex]} />
                            <h4>{description[currentIndex]}</h4>
                            <h2>{title[currentIndex]}</h2>
                            <button>DISCOVER MORE</button>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} onClick={handleClickRight}/>
                    </div>
                </div>
                <div className={classes.slider2}>
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                    <h4>OUTSTANDING DINNER</h4>
                    <h2>DELICIOUS COOKING</h2>
                    <button>DISCOVER MORE</button>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </div>
                <div className={classes.slider3}>
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                    <h4>WONDERFUL CUISINE</h4>
                    <h2>AUTHENTIC KITCHEN</h2>
                    <button>DISCOVER MORE</button>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </div>
            </div>
        </>
    )
}

export default Slideshow;