import React, { useEffect, useState } from "react";
import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";
import CommonLoading from "../../LoadingSpinner/CommonLoading";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import toast from "react-hot-toast";

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
  //  Block Users

  const handleBlockUser = (user, id) => {
    set(push(ref(database, "blockedUsers/")), {
      ...user,
      blockedAt: Date.now(),
    })
      .then(() => {
        return remove(ref(database, `friends/${id}`));
      })
      .then(() => {
        toast.success(`${user?.senderUsername} has been blocked.`);
      })
      .catch((error) => {
        toast.error("Failed to block user");
        console.error(error);
      });
  };
  if (loading) {
    return <CommonLoading />;
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
              data={data}
              userClick={() => {
                if (user && key) {
                  handleBlockUser(user, key);
                }
              }}
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
