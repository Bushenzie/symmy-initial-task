import { cn } from "../../utils/cn";

type BadgeProps = {
  className?: string;
  variant?: "filled" | "outline";
  children: React.ReactNode;
};

export const Badge: React.FC<BadgeProps> = ({ variant = "filled", className, children }) => {
  return (
    <span
      className={cn(
        "py-0.5 px-4 rounded-4xl bg-blue-600 text-white select-none",
        { "border bg-transparent text-black": variant === "outline" },
        className
      )}
    >
      {children}
    </span>
  );
};
