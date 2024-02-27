import { FC } from "react";

import { Button } from "../Button/Button";
import { TfiMenu } from "react-icons/tfi";
import "./styles/Navbar.css";
interface NavbarProps {}

export const Navbar: FC = () => {
  return (
    <div className="navbar--container">
      <div className="navbar--flex--container">
        <h1>The planets</h1>
        <Button
          onClick={() => console.log("Navbar")}
          className="sandwich--menu"
        >
          <TfiMenu />
        </Button>
      </div>
      <hr />
    </div>
  );
};
