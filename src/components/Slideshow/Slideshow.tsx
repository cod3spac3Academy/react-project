import classes from "./Slideshow.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Slide1 from "../../assets/slider_01.jpg";
import Slide2 from "../../assets/slider_02.jpg";
import Slide3 from "../../assets/slider_03.jpg";

const Slideshow = (): JSX.Element => {

    // const images = [Slide1, Slide2, Slide3];
    // const description = ["CONVENTIONAL FOOD", "OUTSTANDING DINING", "WONDERFUL CUISINE"];
    // const title = ["MORNING MOVEMENT", "DELICIOUS COOKING", "AUTHENTIC KITCHEN"];

    const [currentIndex, setCurrentIndex] = useState(0);
    // const [currentImage, setCurrentImage] = useState(false);

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
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleClickRight();
            // setCurrentImage(true);
            // setTimeout(() => {
            //     setCurrentImage(false);
            // }, 4000);
        }, 5000);
        
        return () => {
            clearInterval(interval);
        }; //  Función de desmontaje: cuando se desmonta el componente, se limpia el intervalo para que no haya fugas de memoria.
    }, [currentIndex]);

    return (
        <>
            <div className={classes.slidershow}>
                {/* <div className={classes.sliderForward}>
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
                </div> */}
                
                {currentIndex === 0 ? (<div className={classes.sliderContent}>
                    <img className={classes.image} src={Slide1} alt="Conventional Food"/>
                    <div className={classes.slider}>
                        <FontAwesomeIcon icon={faArrowLeftLong} className={classes.arrow} onClick={handleClickLeft}/>
                        <div className={classes.sliderInfo}>
                            <h4>CONVENTIONAL FOOD</h4>
                            <h2>MORNING MOVEMENT</h2>
                            <button>DISCOVER MORE</button>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} className={classes.arrow} onClick={handleClickRight}/>
                    </div>
                </div>) : (currentIndex === 1 ? (
                <div className={classes.sliderContent}>
                    <img className={classes.image} src={Slide2} alt="Outstanding dining"/>
                    <div className={classes.slider}>
                        <FontAwesomeIcon icon={faArrowLeftLong} className={classes.arrow} onClick={handleClickLeft}/>
                        <div className={classes.sliderInfo}>
                            <h4>OUTSTANDING DINING</h4>
                            <h2>DELICIOUS COOKING</h2>
                            <button>DISCOVER MORE</button>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} className={classes.arrow} onClick={handleClickRight}/>
                    </div>
                </div>) : (
                <div className={classes.sliderContent}>
                    <img className={classes.image} src={Slide3} alt="Wonderful cuisine"/>
                    <div className={classes.slider}>
                        <FontAwesomeIcon icon={faArrowLeftLong} className={classes.arrow} onClick={handleClickLeft}/>
                        <div className={classes.sliderInfo}>
                            <h4>WONDERFUL CUISINE</h4>
                            <h2>AUTHENTIC KITCHEN</h2>
                            <button>DISCOVER MORE</button>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} className={classes.arrow} onClick={handleClickRight}/>
                    </div>
                </div>))}
                
            </div>
        </>
    )
}

export default Slideshow;