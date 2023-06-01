import classes from "./App.module.css";
import React, { useState } from 'react';
import CardInfoApp from "./components/Card-Info/CardInfoApp";
import DiscMenuNav from "./components/Discover-Menu/DiscMenuNav";
import DiscMenuApp from "./components/Discover-Menu/DiscMenuApp";


const App = () => {
  const [selectedMenu, setSelectedMenu] = useState('all');

  return (
    <main>
    <CardInfoApp/>
    <DiscMenuNav setSelectedMenu={setSelectedMenu} />
    <DiscMenuApp selectedMenu={selectedMenu} />
    </main>
  );
};

export default App;
 