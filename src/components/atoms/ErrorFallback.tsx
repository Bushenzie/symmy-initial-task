import type { FallbackProps } from "react-error-boundary";

export const ErrorFallback = ({ error }: FallbackProps) => {
  const message =
    typeof error === "string"
      ? error
      : error instanceof Error
        ? error.message
        : JSON.stringify(error);

  return (
    <span className="text-black py-2 px-4 bg-red-200 border border-red-300 rounded-2xl text-sm">
      {message}
    </span>
  );
};
