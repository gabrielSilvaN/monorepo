import { HTMLProps } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({ type, ...props }: ButtonProps) => {
  return (
    <button type={type} {...props}>
      Button
    </button>
  );
};
