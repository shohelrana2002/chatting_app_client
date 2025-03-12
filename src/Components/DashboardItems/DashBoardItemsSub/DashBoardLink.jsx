import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const DashBoardLink = ({ name, buttonName, address }) => {
  return (
    <>
      <div>
        <div className="flex items-center gap-y-4 gap-x-12">
          <div>
            <picture>
              <img
                className="w-16 h-16 border-2 border-primary p-1 rounded-full"
                src="https://i.ibb.co.com/JFq21TVt/remove.png"
                alt=""
              />
            </picture>
          </div>
          <div>
            <h4>{name}</h4>
            <p>{address}</p>
          </div>
          <div>
            <button className="btn btn-sm btn-primary">{buttonName}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardLink;
