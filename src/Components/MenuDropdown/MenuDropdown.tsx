import { FC, ReactNode } from "react";
interface MenuDropdownProps {
  children: ReactNode;
  className: string;
}

export const MenuDropdown: FC<MenuDropdownProps> = ({
  children,
  className,
}) => {
  return <div className={className}>{children}</div>;
};
