import React from "react";
import { cn } from "../../utils/cn";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "bg-gray-50 p-4 rounded-xl border border-gray-300",
        "hover:bg-gray-200 transition-all",
        className
      )}
    >
      {children}
    </div>
  );
};
