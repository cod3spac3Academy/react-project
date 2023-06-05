import React from "react";
import classes from "./DiscHeaderMenu.module.css";

interface DiscHeaderMenuProps {
  setSelectedMenu: (menu: string) => void;
}

const DiscHeaderMenu: React.FC<DiscHeaderMenuProps> = ({ setSelectedMenu }) => {
  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <div className={classes.menuNavContainer}>
      <h5 className={classes.subtitle}>SPECIAL MENU</h5>
      <h2 className={classes.title}>DISCOVER MENU</h2>
      <div className={classes.navbar}>
        <span onClick={() => handleMenuClick("starters")}>STARTERS</span>
        <span onClick={() => handleMenuClick("nonveg")}>NONVEG</span>
        <span onClick={() => handleMenuClick("vegetarian")}>VEGETARIAN</span>
        <span onClick={() => handleMenuClick("dessert")}>DESSERT</span>
        <span onClick={() => handleMenuClick("drinks")}>DRINKS</span>
      </div>
    </div>
  );
};

export default DiscHeaderMenu;
