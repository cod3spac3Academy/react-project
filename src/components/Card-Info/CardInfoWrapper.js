import classes from'./CardInfoWrapper.module.css';

const CardInfoWrapper=(props)=>{
  return (
    <div className={classes.outerCard}>
        {props.children}
    </div>
  );
}

export default CardInfoWrapper;