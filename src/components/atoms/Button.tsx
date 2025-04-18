import React from "react";
import { cn } from "../../utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isDisabled?: boolean;
  variant?: "primary" | "secondary" | "link";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  isDisabled,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      className={cn(
        "py-2 px-6 cursor-pointer flex gap-2 text-white bg-blue-600 transition-all duration-200 rounded-2xl",
        "hover:bg-blue-400",
        "disabled:bg-blue-400 disabled:select-none disabled:cursor-not-allowed",
        {
          "bg-transparent hover:bg-transparent hover:text-gray-600 text-gray-800":
            variant === "link",
          "bg-transparent border border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800":
            variant === "secondary",
        },
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};
