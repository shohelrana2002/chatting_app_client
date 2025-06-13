import React, { useEffect, useState } from "react";
import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";
import CommonLoading from "../../LoadingSpinner/CommonLoading";
import { getDatabase, onValue, ref } from "firebase/database";

const FriendsList = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const database = getDatabase();

  useEffect(() => {
    const userRef = ref(database, "friends/");
    const unsubscribe = onValue(userRef, (snapshot) => {
      const val = snapshot.val();
      setData(val);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [database]);
  if (loading) {
    return (
      <div className="min-h-3">
        <CommonLoading />
        <CommonLoading />
        <CommonLoading />
        <CommonLoading />
      </div>
    );
  }

  return (
    <>
      <div className="h-[360px] w-full  p-2 rounded-2xl shadow overflow-y-scroll">
        <DashBoardTitle groupName={"Friend List"} />

        {data ? (
          Object.entries(data).map(([key, user]) => (
            <DashBoardLink
              key={key}
              img={user?.senderProfile}
              name={user?.senderUsername}
              buttonName="Block"
              userId={user?.senderUid}
              userClick={(id) => console.log(id, "user id")}
            />
          ))
        ) : (
          <>
            <p className="text-center text-gray-400">
              No friend requests found.
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default FriendsList;
