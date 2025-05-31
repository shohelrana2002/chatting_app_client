import React from "react";
import profile from "/profileImage.avif";
const DashBoardLink = ({ name, buttonName, address, img = profile }) => {
  return (
    <>
      <div className="flex items-center gap-y-4 gap-x-12">
        <div>
          <picture>
            <img
              className=" md:w-12 object-cover md:h-12 h-full w-full  my-2  border-2 border-primary  rounded-full"
              src={img}
              alt=""
            />
          </picture>
        </div>
        <div>
          <h4 className="text-xs font-bold">{name}</h4>
          <p className="text-xs">{address}</p>
        </div>
        <div>
          <button className="btn btn-sm btn-outline">{buttonName}</button>
        </div>
      </div>
      <div className="divider divider-neutral shadow-2xs"></div>
    </>
  );
};

export default DashBoardLink;
