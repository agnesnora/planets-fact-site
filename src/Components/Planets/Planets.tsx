import { FC, useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./style/Planets.css";
import { PlanetsDetailPage } from "./PlanetsDetailPage";
interface PlanetsProps {
  // children: ReactNode;
  className: string;
}

export const Planets: FC<PlanetsProps> = ({ className }) => {
  const context = useContext(AppContext);
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
            >
              <div className={`${item.name.toLowerCase()} dot`}></div>
              <h2>{item.name}</h2>
            </Link>
          ))}
      </ul>
      {/* <PlanetsDetailPage /> */}
    </div>
  );
};
