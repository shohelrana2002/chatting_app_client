import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex bg-gray-300 justify-center items-center">
      <ClipLoader
        size={110}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingSpinner;
