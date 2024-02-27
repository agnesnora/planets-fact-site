import { FC, ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  className: string;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
