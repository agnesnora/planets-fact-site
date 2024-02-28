import { FC, ReactNode, useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
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
            <Link key={item.name} to={`/planet/${item.name}`}>
              <h2>{item.name}</h2>
            </Link>
          ))}
      </ul>
    </div>
  );
  // return <div className={className}>{children}</div>;
};
