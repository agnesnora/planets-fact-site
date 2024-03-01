import React, { FC } from "react";
import { PlanetData } from "../../../data";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

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
        <Button className="view--btn" onClick={handleOverviewClick}>
          Overview
        </Button>
        <Button className="view--btn" onClick={handleStructureClick}>
          Structure
        </Button>
        <Button className="view--btn" onClick={handleSurfaceClick}>
          Surface
        </Button>
      </div>
      <hr />
      <div className="planet--container">
        <div className="img--container">
          {" "}
          <img src={planetImage} alt={`${planet.name} image`} />
        </div>

        <div className="planet--intro">
          <h1>{planet.name.toUpperCase()}</h1>
          <p>{planet.overview.content}</p>
          <p>Source:</p>
          <Link to={planet.overview.source}>
            Wikipedia <FaExternalLinkSquareAlt />
          </Link>
        </div>
        <div className="fact--container">
          <div className="fact--box">
            <p>Rotation time </p>
            <h4>{planet.rotation}</h4>
          </div>
          <div className="fact--box">
            <p>Revolution time</p>
            <h4>{planet.revolution}</h4>
          </div>
          <div className="fact--box">
            <p>Radius</p>
            <h4>{planet.radius}</h4>
          </div>
          <div className="fact--box">
            <p>Temperature</p>
            <h4>{planet.temperature}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
