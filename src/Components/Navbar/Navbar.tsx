import { FC, useState, useContext } from "react";

import { Button } from "../Button/Button";
import { TfiMenu } from "react-icons/tfi";
import { Planets } from "../Planets/Planets";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";

interface NavbarProps {
  isNavbarOn: boolean;
  setIsNavbarOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: FC<NavbarProps> = ({ isNavbarOn, setIsNavbarOn }) => {
  // const [isNavbarOn, setIsNavbarOn] = useState<boolean>(false);

  const context = useContext(AppContext);
  const windowWidth = context?.windowWidth ?? 1200;
  const handleMenuClick = () => {
    setIsNavbarOn((prevOn) => !prevOn);
  };
  const closeNavbarWithLinkClick = () => {
    setIsNavbarOn(false);
  };

  return (
    <div className="navbar--container">
      <div className="navbar--flex--container">
        <NavLink to="/" onClick={closeNavbarWithLinkClick}>
          {" "}
          <h1>The planets</h1>
        </NavLink>

        {innerWidth < 768 ? (
          <Button onClick={handleMenuClick} className="sandwich--menu">
            <TfiMenu />
          </Button>
        ) : (
          <Planets className="planets--container--horizontal" />
        )}
      </div>
      <hr />
      {isNavbarOn && windowWidth < 768 ? (
        <Planets
          className="planets--container--vertical"
          closeNavbarWithLinkClick={closeNavbarWithLinkClick}
          isNavbarOn={isNavbarOn}
        />
      ) : null}
    </div>
  );
};
