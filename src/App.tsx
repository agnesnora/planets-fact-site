import "./App.css";
import { Button } from "./Components/Button/Button";
import { Navbar } from "./Components/Navbar/Navbar";
import { FC, createContext } from "react";
import { BrowserRouter, Router, Routes, Switch } from "react-router-dom";

import { PlanetData } from "../data";
import planets from "../data";

interface AppContectInterface {
  planets: PlanetData[];
}
const AppContext = createContext<AppContectInterface | null>(null);
const App: FC = () => {
  const contextValue: AppContectInterface = { planets };
  return (
    <>
      <BrowserRouter>
        <AppContext.Provider value={contextValue}>
          <Navbar />
        </AppContext.Provider>
      </BrowserRouter>
    </>
  );
};
export { AppContext };
export default App;

//Creating reusable components for a Navbar
//Button, menubutton, menudropdown, menuitem

//Creating Navbar component

// Creating an Options component

//Creating a planetdetails component

// creating the  planetdatabox component
