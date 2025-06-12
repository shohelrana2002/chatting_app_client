import React from "react";
import profile from "/profileImage.avif";
const DashBoardLink = ({
  name,
  buttonName,
  address,
  img = profile,
  userClick,
  userId,
}) => {
  return (
    <>
      <div className="flex w-full items-center justify-between  gap-y-4 gap-x-4">
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
          <button
            onClick={() => userClick(userId)}
            className="btn btn-sm btn-primary"
          >
            {buttonName}
          </button>
        </div>
      </div>
      <div className="divider divider-neutral shadow-2xs"></div>
    </>
  );
};

export default DashBoardLink;
