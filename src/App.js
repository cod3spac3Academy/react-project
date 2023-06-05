import classes from "./App.module.css";
import React, { useState } from 'react';
import CardInfoApp from "./components/Card-Info/CardInfoApp";
import DiscMenuHeader from "./components/Discover-Menu/DiscHeaderMenu";
import DiscMenuApp from "./components/Discover-Menu/DiscMenuApp";
import Footer from "./components/Footer";


const App = () => {
  const [selectedMenu, setSelectedMenu] = useState('all');

  return (
    <main>
    <CardInfoApp/>
    <DiscMenuHeader setSelectedMenu={setSelectedMenu} />
    <DiscMenuApp selectedMenu={selectedMenu} />
    </main>
    <Footer />
  );
};

export default App;
 