import React, { useState } from 'react';
import classes from "./DiscMenuApp.module.css";
import DiscMenu from './DiscMenu.js';
import { menu } from "../../db/menu";

const DiscMenuApp = ({ selectedMenu }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = menu.menuData.filter((row) => {
    if (selectedMenu === 'all') {
      return row.tag?.toLowerCase().includes(filter.toLowerCase());
    } else {
      return row.tag?.toLowerCase() === selectedMenu && row.tag?.toLowerCase().includes(filter.toLowerCase());
    }
  });

  const slicedData = filteredData.slice(0, 8); // Slice the first 8 items

  return (
    <div>
      {slicedData.map((row) => (
        <DiscMenu
          key={row.id}
          image={row.image}
          title={row.title}
          description={row.description}
          price={row.price}
          badge={row.badge}
          tag={row.tag}
        />
      ))}

      <button onClick={() => setFilter("")} className={classes.viewMenuButton}>
        VIEW FULL MENU
      </button>
    </div>
  );
};

export default DiscMenuApp;
