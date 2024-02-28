import { useParams, Link } from "react-router-dom";
import { FC, useContext, useState } from "react";
import { AppContext } from "../../App";
import { PlanetData } from "../../../data";
import { Button } from "../Button/Button";

interface RouteParams {
  name: string;
}

const isRouteParams = (params: any): params is RouteParams => {
  return typeof params === "object" && "name" in params;
};

export const PlanetsDetailPage: FC = () => {
  const context = useContext(AppContext);

  const params = useParams();
  const [view, setView] = useState<string>("planet");
  const handleOverviewClick = () => {
    setView("planet");
  };
  const handleStructureClick = () => {
    setView("internal");
  };
  const handleSurfaceClick = () => {
    setView("geology");
  };

  if (!isRouteParams(params)) {
    console.error("Invalid params:", params);
    return null;
  }
  if (!context) {
    console.error("Context is not available");
    return null;
  }

  const typedParams = params as RouteParams;
  console.log(typedParams);
  const planet: PlanetData | undefined = context?.planets.find(
    (planet) => planet.name === typedParams.name
  );
  if (!planet) {
    // Handle the case where the planet is not found
    console.error(`Planet with name ${typedParams.name} not found`);
    return null;
  }
  console.log(planet);
  const planetImage: string =
    view === "planet"
      ? planet.images.planet
      : view === "geology"
      ? planet.images.geology
      : planet.images.internal;

  return (
    <div>
      <div className="view--container">
        <Button onClick={handleOverviewClick}>Overview</Button>
        <Button onClick={handleStructureClick}>Structure</Button>
        <Button onClick={handleSurfaceClick}>Surface</Button>
      </div>
      <img src={planetImage} />
      <div className="planet--intro">
        <h1>{planet.name.toUpperCase()}</h1>
        <p>{planet.overview.content}</p>
        <Link to={planet.overview.source}>Source: Wikipedia</Link>
      </div>
      <div>
        <div className="fact--box">
          <h4>Rotation time {planet.rotation}</h4>
        </div>
        <div className="fact--box">
          <h4>Revolution time{planet.revolution}</h4>
        </div>
        <div className="fact--box">
          <h4>Radius{planet.radius}</h4>
        </div>
        <div className="fact--box">
          <h4>Temperature{planet.temperature}</h4>
        </div>
      </div>
    </div>
  );
};
