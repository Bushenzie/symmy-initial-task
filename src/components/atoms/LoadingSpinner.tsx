import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div
      className="h-9 w-9 animate-spin rounded-full border-4 border-gray-200 border-l-blue-500"
      role="status"
      aria-label="Loading..."
    ></div>
  );
};

export default LoadingSpinner;
