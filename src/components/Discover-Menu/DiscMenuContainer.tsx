import classes from "./CardInfoContainer.module.css";

interface CardInfoContainerProps {
  children: React.ReactNode; //React.ReactNode is the type of the children prop
}
//Function Component : React.FC
//As the name suggests, the component is defined as a JavaScript 
//function where its first argument is a props object. 
//TS enforces that its return type must be assignable to JSX.Element.
const CardInfoContainer: React.FC<CardInfoContainerProps> = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default CardInfoContainer;
