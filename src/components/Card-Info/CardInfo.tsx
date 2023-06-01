import classes from "./CardInfo.module.css";
import React from "react";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface CardsInfoProps {
  img: {
    path: any;
    text: string;
  };
  subtitle: string;
  title: string;
  strong: string;
  buttonLabel: string;
  buttonDisabled?: boolean;
}

const CardsInfo: React.FC<CardsInfoProps> = (props) => {
  return (
    <div className={classes.cardContainer}>
      <img src={props.img.path} alt={props.img.text} className={classes.cardImage} />
      <div className={classes.cardContent}>
        <h5 className={classes.cardText}>{props.subtitle}</h5>
        <h2 className={classes.cardTitle}>
          {props.title} <strong>{props.strong}</strong>
        </h2>
        <button className={classes.cardButton} disabled={props.buttonDisabled}>
          {props.buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default CardsInfo;
