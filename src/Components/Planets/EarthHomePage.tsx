import { FC, useContext, useState } from "react";
import { AppContext } from "../../App";

import { PlanetDetailComponent } from "./PlanetDetailComponent";
import { PlanetData } from "../../../data";

export const EarthHomePage: FC = () => {
  const context = useContext(AppContext);
  const [view, setView] = useState<string>("planet");
  const earth: PlanetData | undefined = context?.planets.find(
    (item) => item.name === "Earth"
  );

  return <PlanetDetailComponent planet={earth} view={view} setView={setView} />;
};

export default EarthHomePage;
