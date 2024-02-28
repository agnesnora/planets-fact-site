import { FC, useState, useContext } from "react";

import { Button } from "../Button/Button";
import { TfiMenu } from "react-icons/tfi";
import { Planets } from "../Planets/Planets";
import { AppContext } from "../../App";
import "./styles/Navbar.css";

interface NavbarProps {}

export const Navbar: FC = () => {
  const [isNavbarOn, setIsNavbarOn] = useState<boolean>(false);

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
        <h1>The planets</h1>
        <Button onClick={handleMenuClick} className="sandwich--menu">
          <TfiMenu />
        </Button>
      </div>
      <hr />
      {isNavbarOn && windowWidth < 768 ? (
        <Planets
          className="planets--container--vertical"
          closeNavbarWithLinkClick={closeNavbarWithLinkClick}
          isNavbarOn={isNavbarOn}
        />
      ) : (
        <Planets className="planets--container--horizontal" />
      )}
    </div>
  );
};
