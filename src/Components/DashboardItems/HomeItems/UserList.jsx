import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";
import CommonLoading from "../../LoadingSpinner/CommonLoading";
import { useEffect, useState } from "react";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { getAuth } from "firebase/auth";
import toast from "react-hot-toast";
import moment from "moment";

const UserList = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const database = getDatabase();
  useEffect(() => {
    const dataRef = ref(database, "users/");
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const val = snapshot.val();
      setData(val);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [database]);

  // Filter out current user
  const filteredUsers = data
    ? Object.entries(data).filter(
        // eslint-disable-next-line no-unused-vars
        ([_, user]) => user?.email !== currentUser?.email
      )
    : [];

  //  send to friend request and notification
  const handleFriendRequest = (receiver = {}) => {
    if (!currentUser || !receiver.userUid) {
      console.error("Invalid user data for friend request");
      return;
    }
    const senderUid = currentUser?.uid;

    const requestData = {
      senderUid,
      senderEmail: currentUser?.email,
      senderProfile: currentUser?.photoURL,
      senderUsername: currentUser?.displayName,

      receiverUid: receiver?.userUid,
      receiverEmail: receiver?.email,
      receiverProfile: receiver?.profile_picture,
      receiverUsername: receiver?.username,

      createdAt: Date.now(),
    };

    // Save Friend Request
    set(push(ref(database, "friendRequest/")), requestData)
      .then(() => {
        // Notification Save
        return set(push(ref(database, "notification/")), {
          notificationMsg: `${currentUser.displayName} sent you a friend request`,
          senderProfile: currentUser.photoURL,
          createdAt: Date.now(),
        });
      })
      .then(() => {
        toast.success("Friend Request Send");
        // Save unique id in localStorage
        const uniqueId = senderUid + receiver.userUid;
        localStorage.setItem(
          "SenderReceiverId",
          JSON.stringify({ FRid: uniqueId })
        );
      })
      .catch((err) => {
        console.error("Error sending friend request:", err);
      });
  };

  return (
    <div className="h-[360px] w-full p-2 rounded-2xl shadow overflow-y-scroll">
      <DashBoardTitle groupName="User List" length={filteredUsers.length} />

      {loading ? (
        <div className="flex flex-col gap-3 items-center justify-center mt-4">
          <CommonLoading />
        </div>
      ) : filteredUsers.length > 0 ? (
        filteredUsers.map(([key, user]) => (
          <DashBoardLink
            key={key}
            img={user?.profile_picture || user?.receiverProfile}
            address={moment(user?.createdAt)
              .local()
              .format("MMMM Do Y,h:mm A ")}
            name={user?.username || user?.receiverUsername}
            buttonName="+"
            userId={key || user?.receiverUid}
            userClick={() => (
              remove(ref(database, `users/${key}`)),
              handleFriendRequest({
                userUid: key || user?.receiverUid,
                email: user?.email || user?.receiverEmail,
                profile_picture: user?.profile_picture || user?.receiverProfile,
                username: user?.username || user?.receiverUsername,
              })
            )}
          />
        ))
      ) : (
        <div className="flex justify-center items-center h-24">
          <h2 className="text-green-300 font-semibold">No Data Found!</h2>
        </div>
      )}
    </div>
  );
};

export default UserList;
