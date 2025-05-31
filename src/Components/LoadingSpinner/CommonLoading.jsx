import React from "react";

const CommonLoading = () => {
  return (
    <div className="flex items-center gap-y-4 gap-x-8 animate-pulse">
      <div className="rounded-full bg-gray-300 md:w-12 md:h-12 h-full w-full my-2 border-2 border-primary"></div>
      <div className="flex flex-col gap-2">
        <div className="h-4 w-24 bg-gray-300 rounded"></div>
        <div className="h-3 w-16 bg-gray-300 rounded"></div>
      </div>
      <div>
        <div className="h-8 w-20 border-2 border-gray-300 rounded btn btn-sm btn-outline bg-gray-200"></div>
      </div>
    </div>
  );
};

export default CommonLoading;
