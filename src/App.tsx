import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { FC, createContext } from "react";
import { EarthHomePage } from "./Components/Planets/EarthHomePage";
import { PlanetsDetailPage } from "./Components/Planets/PlanetsDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { PlanetData } from "../data";
import planets from "../data";

interface AppContectInterface {
  planets: PlanetData[];
  windowWidth: number;
  screen: { mobile: number; desktop: number };
}
const AppContext = createContext<AppContectInterface | null>(null);
const App: FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isNavbarOn, setIsNavbarOn] = useState<boolean>(false);
  const screen: { mobile: number; desktop: number } = {
    mobile: 768,
    desktop: 1240,
  };

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  const contextValue: AppContectInterface = { planets, windowWidth, screen };
  return (
    <>
      <BrowserRouter>
        <AppContext.Provider value={contextValue}>
          <Navbar isNavbarOn={isNavbarOn} setIsNavbarOn={setIsNavbarOn} />
          <Routes>
            {!isNavbarOn ? (
              <Route path="/" element={<EarthHomePage />} />
            ) : null}
            {!isNavbarOn ? (
              <Route path="/planet/:name" element={<PlanetsDetailPage />} />
            ) : null}
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </>
  );
};
export { AppContext };
export default App;
