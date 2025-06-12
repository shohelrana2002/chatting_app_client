import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";
import CommonLoading from "../../LoadingSpinner/CommonLoading";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../../../Firebase/Firebase.config";
import { getAuth } from "firebase/auth";

const UserList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const currentUser = auth.currentUser;

  useEffect(() => {
    const dataRef = ref(database, "users/");
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const val = snapshot.val();
      setData(val);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Filter out current user
  const filteredUsers = data
    ? Object.entries(data).filter(
        // eslint-disable-next-line no-unused-vars
        ([_, user]) => user?.email !== currentUser?.email
      )
    : [];

  return (
    <div className="h-[360px] w-full p-2 rounded-2xl shadow overflow-y-scroll">
      <DashBoardTitle groupName="User List" length={filteredUsers.length} />

      {loading ? (
        <div className="flex flex-col gap-3 items-center justify-center mt-4">
          <CommonLoading />
          <CommonLoading />
          <CommonLoading />
        </div>
      ) : filteredUsers.length > 0 ? (
        filteredUsers.map(([key, user]) => (
          <DashBoardLink
            key={key}
            img={
              user?.profile_picture ||
              `https://i.ibb.co/jkhMdsMB/niclas-illg-wz-VQp-NRIHg-unsplash.jpg`
            }
            address="Dhaka"
            name={user?.username}
            buttonName="+"
            userId={key}
            userClick={(id) => console.log("Clicked user ID:", id)}
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
