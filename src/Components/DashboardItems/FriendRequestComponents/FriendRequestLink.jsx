import profile from "/profileImage.avif";

const FriendRequestLink = ({
  name,
  buttonName,
  address,
  img = profile,
  userClick,
  userId,
  cancel,
  cancelButton,
  userKey,
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
        <div className="flex gap-x-4">
          <button
            onClick={() => userClick(userId)}
            className="btn btn-sm btn-primary"
          >
            {buttonName}
          </button>
          <button
            onClick={() => cancelButton(userKey)}
            className="btn btn-sm btn-warning"
          >
            {cancel}
          </button>
        </div>
      </div>
      <div className="divider divider-neutral shadow-2xs"></div>
    </>
  );
};

export default FriendRequestLink;
