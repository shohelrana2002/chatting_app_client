import React, { useEffect, useState } from "react";
import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";
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
import FriendRequestLink from "../FriendRequestComponents/FriendRequestLink";
import CancelModal from "../../../Modal/CancelModal";

const FriendRequest = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  // modal
  const [openCancelModal, setOpenCancelModal] = useState(false);
  const [selectedCancelId, setSelectedCancelId] = useState(null);

  // modal
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
  // modal
  const handleCancelRequest = (id) => {
    const cancelledUser = data[id];
    console.log(cancelledUser);
    remove(ref(database, `friendRequest/${id}`))
      .then(() => {
        toast.success("Friend request cancelled");

        return set(push(ref(database, "users/")), {
          ...cancelledUser,
          cancelData: Date.now(),
        });
      })
      .catch((err) => {
        toast.error("Cancel failed");
        console.error(err);
      });
  };
  // modal
  if (loading) {
    return <CommonLoading />;
  }
  return (
    <div className="h-[360px] w-full  p-2 rounded-2xl shadow overflow-y-scroll">
      <DashBoardTitle
        groupName="Friend Request"
        length={Object.keys(data || {}).length}
      />
      {data ? (
        Object.entries(data).map(([key, user]) => (
          <FriendRequestLink
            key={key}
            img={user?.receiverProfile}
            address="Dhaka"
            name={user?.receiverUsername}
            buttonName="Confirm"
            cancel={"Cancel"}
            userId:user={user?.receiverUid}
            userId={key}
            cancelButton={() => {
              setSelectedCancelId(key);
              setOpenCancelModal(true);
            }}
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
      {/*  modal */}

      <CancelModal
        isOpen={openCancelModal}
        onRequestClose={() => setOpenCancelModal(false)}
        onConfirm={() => {
          if (selectedCancelId) {
            handleCancelRequest(selectedCancelId);
          }
          setOpenCancelModal(false);
        }}
      ></CancelModal>
    </div>
  );
};

export default FriendRequest;
