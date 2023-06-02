import React,{ useState } from "react";
import classes from "./DiscMenuApp.module.css";
import DiscMenu from "./DiscMenu";
import { menu } from "../../db/menu";

const DiscMenuApp = ({ selectedMenu }) => {
  const [showAll, setFullViewMenu] = useState(false);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
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

  const renderMenuRows = () => {
    const rows = [];
    const isDesktop = window.innerWidth >= 992; // Check if the screen size is desktop
    const columnCount = isDesktop ? 2 : 1;
    const itemsPerColumn = Math.ceil(slicedData.length / columnCount); // Calculate the number of items per column

    for (let i = 0; i < columnCount; i++) { // Loop through the number of columns
      const start = i * itemsPerColumn;
      const end = start + itemsPerColumn;
      const columnItems = slicedData.slice(start, end);

      const columnRow = columnItems.map((row, index) => (
        <tr key={row.id} className={index === 0 ? `${classes.firstRow}` :""}>
          <td key={row.id}>
            <DiscMenu
              image={row.image}
              title={row.title}
              description={row.description}
              price={row.price}
              badge={row.badge}
              tag={row.tag}
            />
          </td>
        </tr>
      ));
      rows.push(
        <tr key={i} className={classes.column}>
          {columnRow}
        </tr>
      );
    }
    return rows;
  };
  return (
    <div className={classes.dataContainer} data-testid="DiscMenuApp">
      <table className={classes.customTable}>
        <tbody>{renderMenuRows()}</tbody>
      </table>
      <button onClick={handleToggleView} className={classes.viewMenuButton}>
        {showAll ? "SHOW LESS" : "VIEW FULL MENU"}
      </button>
    </div>
  );
};

export default DiscMenuApp;
