import React from 'react';
import classes from "./CardsInfo.module.css"

const CardsInfo = (props)=> {
    return (
        <div className={classes.cardContainer}>
        <img src={props.img.path} alt={props.img.text} className={classes.cardImage} />
        <div className={classes.cardContent}>
          <h5 className={classes.cardText}>{props.subtitle}</h5>
          <h2 className={classes.cardTitle}>{props.title} <strong>{props.strong}</strong></h2>
          <button className={classes.cardButton} disabled={props.buttonDisabled}>{props.buttonLabel}</button>
        </div>
      </div>
    );
  }
  
  export default CardsInfo;
