import { FC, useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./style/Planets.css";

import { MdArrowForwardIos } from "react-icons/md";
interface PlanetsProps {
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
    closeNavbarWithLinkClick();
  };

  return (
    <div className={className}>
      <ul
        data-testid="planets--list"
        className="planets--list"
        style={{ padding: " 0 1em" }}
      >
        {context &&
          context.planets &&
          context.planets.map((item) => (
            <Link
              key={item.name}
              to={`/planet/${item.name}`}
              aria-label={`View details for the ${item.name} planet`}
              onClick={closeNavbarWithLinkClick}
            >
              <div
                onClick={handleLinkClick}
                className={
                  windowWidth < (context?.screen.mobile ?? 768)
                    ? "nav--list--flex"
                    : "nav--list"
                }
              >
                <div className="dotted--name">
                  {windowWidth < (context?.screen.mobile ?? 768) ? (
                    <div className={`${item.name.toLowerCase()} dot`}></div>
                  ) : null}
                  <h2>{item.name}</h2>
                </div>

                {windowWidth < (context?.screen.mobile ?? 768) ? (
                  <MdArrowForwardIos className="forward--icon" />
                ) : null}
              </div>
              {windowWidth < (context?.screen.mobile ?? 768) ? <hr></hr> : null}
            </Link>
          ))}
      </ul>
    </div>
  );
};
