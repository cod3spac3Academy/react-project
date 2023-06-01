import classes from'./CardInfoWrapper.module.css';

interface CardInfoWrapperProps{
  children: React.ReactNode;
  orderTwo?: boolean;
}

const CardInfoWrapper:React.FC<CardInfoWrapperProps> =(props)=>{
  return (
    <div className={`${classes.outerCard} ${props.orderTwo && classes.orderTwo}`} data-testid="card-info-wrapper">
        {props.children}
        
    </div>
  );
}

export default CardInfoWrapper;