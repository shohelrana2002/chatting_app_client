import React, { useEffect, useState } from "react";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";
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
import CancelModal from "../../../Modal/CancelModal";

const BlockUsers = () => {
  // modal
  const [openCancelModal, setOpenCancelModal] = useState(false);
  const [selectedCancelId, setSelectedCancelId] = useState(null);

  // modal
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const database = getDatabase();
  useEffect(() => {
    const userRef = ref(database, "blockedUsers/");
    const unsubscribe = onValue(userRef, (snapshot) => {
      const val = snapshot.val();
      setData(val);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [database]);

  // modal
  const handleCancelRequest = (id) => {
    const cancelledUser = data[id];
    // console.log(cancelledUser);

    remove(ref(database, `blockedUsers/${id}`))
      .then(() => {
        toast.success(`${cancelledUser?.senderUsername} Unblock`);

        return set(push(ref(database, "friends/")), {
          ...cancelledUser,
          cancelData: Date.now(),
        });
      })
      .catch((err) => {
        toast.error("Unblock failed");
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
        groupName="Blocked"
        length={Object.keys(data || {}).length}
      />

      {data && data ? (
        Object.entries(data).map(([key, user]) => (
          <DashBoardLink
            key={key}
            buttonName={"Unblock"}
            img={user?.senderProfile}
            name={user?.senderUsername}
            userId={key}
            userClick={() => {
              setSelectedCancelId(key);
              setOpenCancelModal(true);
            }}
          ></DashBoardLink>
        ))
      ) : (
        <>
          <p>No Data Found</p>
        </>
      )}
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

export default BlockUsers;
