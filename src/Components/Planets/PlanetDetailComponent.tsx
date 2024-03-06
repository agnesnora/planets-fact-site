import React, { FC, useContext } from "react";
import { PlanetData } from "../../../data";
import { Link } from "react-router-dom";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { AppContext } from "../../App";
import { OptionSelector } from "../OptionSelector/OptionSelector";

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
  const context = useContext(AppContext);
  const windowWidth = context?.windowWidth ?? 1200;
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
      {windowWidth < 768 ? (
        <div>
          {" "}
          <OptionSelector
            planetName={planet.name}
            view={view}
            setView={setView}
          />
          <hr />{" "}
        </div>
      ) : null}
      <div className="planet--container">
        <div className="planet--container--flex">
          {view === "geology" ? (
            <div className="img--container">
              <img
                className="back--img"
                src={planet.images.planet}
                alt={`${planet.name} image`}
              />
              <img
                className="front--img"
                src={planet.images.geology}
                alt={`${planet.name} geology image`}
                // style={{ width: "200px", height: "200px" }}
              />
            </div>
          ) : (
            <img
              className="planet--img"
              src={planetImage}
              alt={`${planet.name} image`}
            />
          )}
          {/* <div className="img--container">
            {" "}
            {view === "geology" ? (
              <div>
                <img src={planet.images.planet} alt={`${planet.name} image`} />
                <img
                  src={planet.images.geology}
                  alt={`${planet.name} geology image`}
                />
              </div>
            ) : (
              <img src={planetImage} alt={`${planet.name} image`} />
            )}
          </div> */}
          <div className="planet--main">
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
            {windowWidth > 768 ? (
              <OptionSelector
                planetName={planet.name}
                view={view}
                setView={setView}
              />
            ) : null}
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
