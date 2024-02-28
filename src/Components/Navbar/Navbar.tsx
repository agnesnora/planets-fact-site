import { FC, useState } from "react";

import { Button } from "../Button/Button";
import { TfiMenu } from "react-icons/tfi";
import { Planets } from "../Planets/Planets";
// import { MenuItem } from "../MenuItem/MenuItem";
// import { AppContext } from "../../App";
// import { Link } from "react-router-dom";
import "./styles/Navbar.css";

interface NavbarProps {}

export const Navbar: FC = () => {
  const [isNavbarOn, setIsNavbarOn] = useState<boolean>(false);
  // const context = useContext(AppContext);
  const handleMenuClick = () => {
    setIsNavbarOn((prevOn) => !prevOn);
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
      {isNavbarOn ? <Planets className="planets--container" /> : null}
    </div>
  );
};
