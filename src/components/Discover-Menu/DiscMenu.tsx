import classes from "./DiscMenu.module.css";


const DiscMenu = (props:any) => {
    //to add a 0 before the price if it is a single digit
    const formattedPrice = props.price.toLocaleString(undefined, {
        minimumIntegerDigits: 2,
      });
  return (
      <table className={classes.customTable}>
        <tbody>
        <tr>
            <td className={classes.img}>
              <img
                src={props.image.path}
                alt={props.image.text}
                className={classes.image}
              />
            </td>
            <td className={classes.title}>
              {props.title}{" "}
              <span className={`${classes[props.badge?.toLowerCase()]}`}>
                {props.badge}
              </span>
              <div className={classes.desc}>{props.description}</div>
            </td>
            <td className={classes.price}>${formattedPrice}</td>
          </tr>
          </tbody>
      </table>
  );
};

export default DiscMenu;
