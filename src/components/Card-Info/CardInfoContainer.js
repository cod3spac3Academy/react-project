import classes from"./CardInfoContainer.module.css";

const CardInfoContainer=(props)=> {
  return (
    <div className={classes.container}>{props.children}</div>
  );
}

export default CardInfoContainer;