import classes from "./DiscMenu.module.css";

const DiscMenu = (props) => {
    const formattedPrice = props.price.toLocaleString(undefined, {
        minimumIntegerDigits: 2,
      });
  return (
    <div>
      <table className={classes.customTable}>
        <tbody>
          <tr>
            <td>
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
    </div>
  );
};

export default DiscMenu;
