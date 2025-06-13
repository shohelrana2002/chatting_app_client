import React, { useEffect, useState } from "react";
import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import CommonLoading from "../../LoadingSpinner/CommonLoading";
import toast from "react-hot-toast";

const FriendRequest = () => {
  const [data, setData] = useState({});

  const [loading, setLoading] = useState(true);
  const database = getDatabase();
  useEffect(() => {
    const dataRef = ref(database, "friendRequest/");
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const val = snapshot.val();
      setData(val);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [database]);
  // Filter out current user
  if (loading) {
    return (
      <div className="min-h-3">
        <CommonLoading />
        <CommonLoading />
        <CommonLoading />
      </div>
    );
  }

  //  send to friend request and notification
  const handleFriendConfirm = (frnConfirm = {}) => {
    // Save Friend Request
    set(push(ref(database, "friends/")), {
      ...frnConfirm,
      createdAt: Date.now(),
    })
      .then(() => {
        // Notification Save
        return set(push(ref(database, "notification/")), {
          notificationMsg: `${frnConfirm?.displayName} sent you a friend request`,
          senderProfile: frnConfirm?.senderProfile,
          createdAt: Date.now(),
        });
      })
      .then(() => {
        toast.success("Friend Confirm");
      })
      .catch((err) => {
        toast.error("Error sending friend request:", err);
      });
  };
  return (
    <div className="h-[360px] w-full  p-2 rounded-2xl shadow overflow-y-scroll">
      <DashBoardTitle
        groupName="Friend Request"
        length={Object.keys(data || {}).length}
      />
      {data ? (
        Object.entries(data).map(([key, user]) => (
          <DashBoardLink
            key={key}
            img={user?.senderProfile}
            address="Dhaka"
            name={user?.senderUsername}
            buttonName="Confirm"
            userId:user={user?.senderUid}
            userId={key}
            userClick={() => (
              remove(ref(database, `friendRequest/${key}`)),
              handleFriendConfirm({
                ...user,
                key,
              })
            )}
          />
        ))
      ) : (
        <p className="text-center text-gray-400">No friend requests found.</p>
      )}
    </div>
  );
};

export default FriendRequest;
