import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const DashBoardTitle = ({ groupName }) => {
  return (
    <div className="flex justify-between items-center my-10">
      <h1 className="text-xl font-bold ">{groupName}</h1>
      <h3 className="text-xl font-bold ">
        <BsThreeDotsVertical />
      </h3>
    </div>
  );
};

export default DashBoardTitle;
