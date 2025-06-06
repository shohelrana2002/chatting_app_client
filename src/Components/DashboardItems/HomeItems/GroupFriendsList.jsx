import { useEffect, useState } from "react";
import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../../../Firebase/Firebase.config";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";
import CommonLoading from "../../LoadingSpinner/CommonLoading";
const GroupFriendsList = () => {
  // firebase data get in real time get
  const [data, setData] = useState(null);
  const database = getDatabase(app);

  useEffect(() => {
    const dataRef = ref(database, "users/");
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const val = snapshot.val();
      setData(val);
    });

    // Optional: clean up listener on unmount
    return () => unsubscribe();
  }, [database]);

  return (
    <div className="h-[360px] w-full -mt-4 overflow-y-auto p-2 rounded-2xl shadow ">
      <label className="input bg-blue-50 z-10">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="Search" />
      </label>
      {/* Group list */}
      <div className="-mt-8 rounded-2xl ">
        <>
          <DashBoardTitle groupName="Group List" />
          {data ? (
            <>
              {data &&
                Object.entries(data).map(([key, user]) => (
                  <DashBoardLink
                    key={key}
                    img={user?.profile_picture}
                    address="Dhaka"
                    name={user?.username}
                    buttonName="Block"
                  />
                ))}
            </>
          ) : (
            <>
              <CommonLoading />
              <CommonLoading />
              <CommonLoading />
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default GroupFriendsList;
