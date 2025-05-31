import React, { useContext } from "react";
import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import CommonLoading from "../../LoadingSpinner/CommonLoading";

const FriendsList = () => {
  const { user } = useContext(AuthContext);

  console.log(user);
  return (
    <>
      {user ? (
        <div className="h-[360px] w-full  p-2 rounded-2xl shadow overflow-y-scroll">
          <DashBoardTitle groupName={"Friend List"} />
          <DashBoardLink
            address="Dhaka "
            buttonName="Block"
            name="Shohel Rana"
          />
          <DashBoardLink
            img={user?.photoURL}
            address="Dhaka"
            name={user?.displayName}
            buttonName="Block"
          />
        </div>
      ) : (
        <CommonLoading />
      )}
    </>
  );
};

export default FriendsList;
