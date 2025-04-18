import React from "react";
import { cn } from "../../utils/cn";

type SeparatorProps = {
  direction?: "horizontal" | "vertical";
};

export const Separator: React.FC<SeparatorProps> = ({ direction = "horizontal" }) => {
  return (
    <div
      className={cn("bg-gray-300", {
        "w-[0.75px] h-full": direction === "vertical",
        "h-[0.75px] w-full": direction === "horizontal",
      })}
    />
  );
};
