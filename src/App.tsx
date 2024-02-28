import "./App.css";
import { Button } from "./Components/Button/Button";
import { Navbar } from "./Components/Navbar/Navbar";
import { FC, createContext } from "react";
import { PlanetsDetailPage } from "./Components/Planets/PlanetsDetailPage";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

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
          <Routes>
            {" "}
            <Route path="/planet/:name" element={<PlanetsDetailPage />}></Route>
          </Routes>
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
