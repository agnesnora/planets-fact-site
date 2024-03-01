import React, { FC } from "react";
import { PlanetData } from "../../../data";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

interface PlanetDetailProps {
  planet: PlanetData | undefined;
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
}

export const PlanetDetailComponent: FC<PlanetDetailProps> = ({
  planet,
  view,
  setView,
}) => {
  const handleOverviewClick = () => {
    setView("planet");
  };

  const handleStructureClick = () => {
    setView("internal");
  };

  const handleSurfaceClick = () => {
    setView("geology");
  };

  if (!planet) {
    console.error("Planet data is not available");
    return null;
  }

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
      <img src={planetImage} alt={`${planet.name} image`} />
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
