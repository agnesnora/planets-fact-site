import { FC, useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./style/Planets.css";
import { PlanetsDetailPage } from "./PlanetsDetailPage";
interface PlanetsProps {
  // children: ReactNode;
  className: string;
  isNavbarOn: boolean;
  closeNavbarWithLinkClick: () => void;
}

export const Planets: FC<PlanetsProps> = ({
  className,
  closeNavbarWithLinkClick,
}) => {
  const context = useContext(AppContext);
  const windowWidth = context?.windowWidth ?? 1200;

  const handleLinkClick = () => {
    // Close the navbar when a link is clicked
    closeNavbarWithLinkClick();
  };

  return (
    <div className={className}>
      <ul data-testid="planets--list">
        {context &&
          context.planets &&
          context.planets.map((item) => (
            <Link
              key={item.name}
              to={`/planet/${item.name}`}
              aria-label={`View details for the ${item.name} planet`}
              onClick={closeNavbarWithLinkClick}
            >
              <div onClick={handleLinkClick}>
                {windowWidth < 768 ? (
                  <div className={`${item.name.toLowerCase()} dot`}></div>
                ) : null}
                <h2>{item.name}</h2>
              </div>
            </Link>
          ))}
      </ul>
      {/* <PlanetsDetailPage /> */}
    </div>
  );
};
