import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const DashBoardTitle = ({ groupName }) => {
  return (
    <div className="flex justify-between my-12">
      <h1>{groupName}</h1>
      <h3>
        <BsThreeDotsVertical />
      </h3>
    </div>
  );
};

export default DashBoardTitle;
