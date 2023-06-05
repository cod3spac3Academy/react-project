import React, { useState } from "react";
import classes from "./DiscMenuApp.module.css";
import DiscMenu from "./DiscMenu";
import { menu } from "../../db/menu";

interface DiscMenuAppProps {
  selectedMenu: string;
}

const DiscMenuApp: React.FC<DiscMenuAppProps> = ({ selectedMenu }) => {
  const [showAll, setFullViewMenu] = useState(false);
  const [filter, setFilter] = useState("");

  // eslint-disable-next-line
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleToggleView = () => {
    setFullViewMenu(!showAll);
  };

  const filteredData = menu.menuData.filter((row) => {
    if (selectedMenu === "all") {
      return row.tag?.toLowerCase().includes(filter.toLowerCase());
    } else {
      return (
        (row.tag?.toLowerCase() === selectedMenu &&
          row.tag?.toLowerCase().includes(filter.toLowerCase())) ||
        showAll
      );
    }
  });
  const slicedData = showAll ? filteredData : filteredData.slice(0, 8); // Display all or first 8 items

  return (
    <div className={classes.dataContainer} data-testid="DiscMenuApp">
      <div className={classes.rowContainer}>
        {slicedData.map((row, index) => (
          <div
            key={row.id}
            className={index === 0 ? classes.firstRow : classes.column}
          >
            <DiscMenu
              image={row.image}
              title={row.title}
              description={row.description}
              price={row.price}
              badge={row.badge}
              tag={row.tag}
            />
          </div>
        ))}
      </div>
      <button onClick={handleToggleView} className={classes.viewMenuButton}>
        {showAll ? "SHOW LESS" : "VIEW FULL MENU"}
      </button>
    </div>
  );
};

export default DiscMenuApp;
