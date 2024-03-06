import { FC, useContext } from "react";
import { Button } from "../Button/Button";
import { AppContext } from "../../App";

interface SelectorProps {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
  planetName: string;
}
export const OptionSelector: FC<SelectorProps> = ({
  setView,
  view,
  planetName,
}) => {
  const context = useContext(AppContext);
  const windowWidth = context?.windowWidth ?? 1200;
  const getButtonStyle = (planetName: string) => {
    let planetColor = "";

    switch (planetName) {
      case "Earth":
        planetColor = "#6f2ed6";
        break;
      case "Mars":
        planetColor = "#d14c32";
        break;
      case "Mercury":
        planetColor = "#419ebb";
        break;
      case "Venus":
        planetColor = "#eda249";
        break;
      case "Jupiter":
        planetColor = "#d83a34";
        break;
      case "Saturn":
        planetColor = "#cd5120";
        break;
      case "Uranus":
        planetColor = "#1ec1a2";
        break;
      case "Neptune":
        planetColor = "#2d68f0";
        break;

      default:
        // Default style when no match is found
        planetColor = "";
        break;
    }

    const style =
      windowWidth < 768
        ? {
            borderBottom: `${planetColor} 6px solid`,
            backgroundColor: "transparent",
          }
        : { backgroundColor: planetColor, color: "#fff", border: "none" };

    return style;
  };
  const isActive = (buttonView: string) =>
    view === buttonView ? "active" : "";
  const handleOverviewClick = () => {
    setView("planet");
  };

  const handleStructureClick = () => {
    setView("internal");
  };

  const handleSurfaceClick = () => {
    setView("geology");
  };
  return (
    <div className="selector--container">
      <Button
        onClick={handleOverviewClick}
        className={isActive("planet")}
        style={isActive("planet") ? getButtonStyle(planetName) : {}}
      >
        {windowWidth > 768 ? (
          <div>
            <span className="number">01</span> Overview
          </div>
        ) : (
          "Overview"
        )}
      </Button>
      <Button
        onClick={handleStructureClick}
        className={isActive("internal")}
        style={isActive("internal") ? getButtonStyle(planetName) : {}}
      >
        {windowWidth > 768 ? (
          <div>
            <span className="number">02</span> Internal structure
          </div>
        ) : (
          "Structure"
        )}
      </Button>

      <Button
        onClick={handleSurfaceClick}
        className={isActive("geology")}
        style={isActive("geology") ? getButtonStyle(planetName) : {}}
      >
        {windowWidth > 768 ? (
          <div>
            <span className="number">03</span> Surface geology
          </div>
        ) : (
          "Surface"
        )}
      </Button>
    </div>
  );
};
