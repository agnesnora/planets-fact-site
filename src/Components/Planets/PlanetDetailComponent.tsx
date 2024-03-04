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

  const getButtonStyle = (planetName) => {
    let borderBottomStyle = "";

    switch (planetName) {
      case "Earth":
        borderBottomStyle = "3px solid  #6f2ed6";
        break;
      case "Mars":
        borderBottomStyle = "3px solid #d14c32";
        break;
      case "Mercury":
        borderBottomStyle = "3px solid #419ebb";
        break;
      case "Venus":
        borderBottomStyle = "3px solid #eda249";
        break;
      case "Jupiter":
        borderBottomStyle = "3px solid  #d83a34";
        break;
      case "Saturn":
        borderBottomStyle = "3px solid  #cd5120";
        break;
      case "Uranus":
        borderBottomStyle = "3px solid  #1ec1a2";
        break;
      case "Neptune":
        borderBottomStyle = "3px solid   #2d68f0";
        break;

      default:
        // Default style when no match is found
        borderBottomStyle = "";
        break;
    }

    return { borderBottom: borderBottomStyle };
  };
  const isActive = (buttonView: string) =>
    view === buttonView ? "active" : "";
  return (
    <div>
      <div className="view--container">
        <Button
          onClick={handleOverviewClick}
          className={isActive("planet")}
          style={isActive("planet") ? getButtonStyle(planet.name) : {}}
        >
          Overview
        </Button>
        <Button
          onClick={handleStructureClick}
          className={isActive("internal")}
          style={isActive("internal") ? getButtonStyle(planet.name) : {}}
        >
          Structure
        </Button>
        <Button
          onClick={handleSurfaceClick}
          className={isActive("geology")}
          style={isActive("geology") ? getButtonStyle(planet.name) : {}}
        >
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
          <div className="wikipedia">
            <p>Source :</p>
            <Link to={planet.overview.source}>
              Wikipedia{" "}
              <FaExternalLinkSquareAlt className="external--link--icon" />
            </Link>
          </div>
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
