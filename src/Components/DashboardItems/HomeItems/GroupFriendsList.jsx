import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";
import CommonLoading from "../../LoadingSpinner/CommonLoading";

const GroupFriendsList = () => {
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
        <DashBoardTitle groupName="User List" />
      </div>
    </div>
  );
};

export default GroupFriendsList;
