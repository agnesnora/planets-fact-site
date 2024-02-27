import { FC, ReactNode } from "react";
import { PlanetData } from "../../../data";

interface MenuItemProps {
  children: ReactNode;
  planet?: PlanetData;
}
export const MenuItem: FC<MenuItemProps> = ({ children }) => {
  return <div>{children} </div>;
};
{
  /* <div>
{" "}
{planet ? (
  
  <>
    <div>{planet.name}</div>

  </>
) : (
  
  <div>{children}</div>
)}
</div> */
}
