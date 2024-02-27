import { FC, useContext } from "react";

import { Button } from "../Button/Button";
import { TfiMenu } from "react-icons/tfi";
import { MenuDropdown } from "../MenuDropdown/MenuDropdown";
import { MenuItem } from "../MenuItem/MenuItem";
import { AppContext } from "../../App";
import "./styles/Navbar.css";

interface NavbarProps {}

export const Navbar: FC = () => {
  const context = useContext(AppContext);
  console.log(context);
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
      <MenuDropdown className="menu--dropdown">
        <ul data-testid="planets--list">
          {context &&
            context.planets.map((item) => (
              <MenuItem key={item.name} planet={item}>
                <h2>{item.name}</h2>
              </MenuItem>
            ))}
        </ul>
      </MenuDropdown>
    </div>
  );
};
