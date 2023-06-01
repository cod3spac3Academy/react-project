import React from 'react';
import classes from "./DiscMenuNav.module.css";


const DiscMenuNav = ({ setSelectedMenu }) => {
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };
  return (
    <div>
        <h5 className={classes.subtitle}>SPECIAL MENU</h5>
        <h2 className={classes.title}>DISCOVER MENU</h2>
        <div className={classes.navbar}>
        <span onClick={() => handleMenuClick('starters')}>STARTERS</span>
        <span onClick={() => handleMenuClick('nonveg')}>NONVEG</span>
        <span onClick={() => handleMenuClick('vegetarian')}>VEGETARIAN</span>
        <span onClick={() => handleMenuClick('dessert')}>DESSERT</span>
        <span onClick={() => handleMenuClick('drinks')}>DRINKS</span>
        </div>
    </div>
  );
};

export default DiscMenuNav;