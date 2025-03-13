import React from "react";
const DashBoardLink = ({ name, buttonName, address }) => {
  return (
    <>
      <div className="flex items-center gap-y-4 gap-x-12">
        <div>
          <picture>
            <img
              className=" md:w-8 object-cover md:h-8 h-full w-full  my-2  border-2 border-primary  rounded-full"
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
      <div className="divider divider-neutral shadow-2xs"></div>
    </>
  );
};

export default DashBoardLink;
