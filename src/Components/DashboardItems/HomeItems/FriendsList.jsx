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
import { auth } from "../../../AuthProvider/AuthProvider";
import moment from "moment/moment";

const FriendsList = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const database = getDatabase();
  const { currentUser } = auth;

  useEffect(() => {
    const userRef = ref(database, "friends/");
    const unsubscribe = onValue(userRef, (snapshot) => {
      const val = snapshot.val();
      setData(val || {});
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

  // ✅ Filter only the current user's friends
  // eslint-disable-next-line no-unused-vars
  const filteredFriends = Object.entries(data).filter(([_, user]) => {
    return (
      user?.senderEmail === currentUser?.email ||
      user?.receiverEmail === currentUser?.email
    );
  });

  if (loading) {
    return <CommonLoading />;
  }
  return (
    <>
      <div className="h-[360px] w-full  p-2 rounded-2xl shadow overflow-y-scroll">
        <DashBoardTitle groupName={"Friend List"} />
        {filteredFriends.length > 0 ? (
          filteredFriends.map(([key, user]) => {
            const isCurrentUserSender =
              user?.senderEmail === currentUser?.email;
            return (
              <DashBoardLink
                key={key}
                address={moment(user?.createdAt)
                  .local()
                  .format("MMMM  Do Y,h:mm A")}
                img={
                  isCurrentUserSender
                    ? user?.receiverProfile
                    : user?.senderProfile
                }
                name={
                  isCurrentUserSender
                    ? user?.receiverUsername
                    : user?.senderUsername
                }
                buttonName="Block"
                userClick={() => handleBlockUser(user, key)}
              />
            );
          })
        ) : (
          <>
            <p className="text-center text-gray-400">No friends found.</p>
          </>
        )}
        {/* {data ? (
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
        )} */}
      </div>
    </>
  );
};

export default FriendsList;
