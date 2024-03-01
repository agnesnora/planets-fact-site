import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { PlanetData } from "../../../data";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export const EarthHomePage = () => {
  const context = useContext(AppContext);
  const [view, setView] = useState<string>("planet");
  console.log("context", context);
  const earth: PlanetData | undefined = context?.planets.find(
    (item) => item.name === "Earth"
  );
  const handleOverviewClick = () => {
    setView("planet");
  };
  const handleStructureClick = () => {
    setView("internal");
  };
  const handleSurfaceClick = () => {
    setView("geology");
  };

  if (!context) {
    console.error("Context is not available");
    return null;
  }

  const earthImage: string =
    view === "planet"
      ? earth?.images.planet
      : view === "geology"
      ? earth?.images.geology
      : earth?.images.internal;

  return (
    <div>
      <div className="view--container">
        <Button onClick={handleOverviewClick}>Overview</Button>
        <Button onClick={handleStructureClick}>Structure</Button>
        <Button onClick={handleSurfaceClick}>Surface</Button>
      </div>
      <img src={earthImage} />
      <div className="planet--intro">
        <h1>{earth?.name.toUpperCase()}</h1>
        <p>{earth?.overview.content}</p>
        <Link to={earth.overview.source}>Source: Wikipedia</Link>
      </div>
      <div>
        <div className="fact--box">
          <h4>Rotation time {earth?.rotation}</h4>
        </div>
        <div className="fact--box">
          <h4>Revolution time{earth?.revolution}</h4>
        </div>
        <div className="fact--box">
          <h4>Radius{earth?.radius}</h4>
        </div>
        <div className="fact--box">
          <h4>Temperature{earth?.temperature}</h4>
        </div>
      </div>
    </div>
  );
};
