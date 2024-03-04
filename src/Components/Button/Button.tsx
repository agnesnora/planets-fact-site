import { CSSProperties, FC, ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  className: string;
  children: ReactNode;
  style: CSSProperties;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  className,
  style,
}) => {
  return (
    <button style={style} onClick={onClick} className={className}>
      {children}
    </button>
  );
};
