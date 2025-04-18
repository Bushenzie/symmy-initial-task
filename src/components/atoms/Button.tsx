import React from "react";
import { cn } from "../../utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isDisabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ children, className, isDisabled, ...props }) => {
  return (
    <button
      className={cn(
        "py-2 px-6 cursor-pointer text-white bg-blue-600 transition-all duration-200 rounded-2xl",
        "hover:bg-blue-400",
        "disabled:bg-blue-400 disabled:select-none disabled:cursor-not-allowed",
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};
