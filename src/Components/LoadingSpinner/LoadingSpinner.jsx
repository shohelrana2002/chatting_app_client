import React from "react";
import CirclesWithBar from "react-spinners/CirclesWithBar";
const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex bg-gray-300 justify-center items-center">
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoadingSpinner;
