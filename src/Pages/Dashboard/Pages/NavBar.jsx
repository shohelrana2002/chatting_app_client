import { CgHome } from "react-icons/cg";
import NavBarItems from "../../../Shared/NavBar/NavBarItems";
import { FaUpload } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { FaBell } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useCloudinaryUpload from "../../../Hooks/useCloudinaryUpload ";
import { getAuth } from "firebase/auth";
const NavBar = () => {
  const auth = getAuth();

  const { user } = useContext(AuthContext);
  const { handleLogout, HandleUpdateProfile } = useAuth();
  const navigate = useNavigate();

  const logOutUser = async () => {
    try {
      await handleLogout();
      navigate("/login");
    } catch (error) {
      toast(error);
      console.log(error, "Handle Logout Error ");
    }
  };
  const { handleUpload, widgetReady } = useCloudinaryUpload();
  const name = auth?.currentUser?.displayName;
  const handleClick = () => {
    handleUpload(async (url) => {
      try {
        await HandleUpdateProfile(name, url);
        // console.log(url);
      } catch (error) {
        // console.log(error);
        toast.error(error.message);
      }
      // console.log("Image URL received:", url);
      // Optional: send to backend or show preview
    });
  };

  return (
    <>
      <div className="drawer  lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start justify-items-start">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button  lg:hidden"
          >
            <span>
              <CgHome />
            </span>
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-[#5F35F5] flex  justify-between  text-base-content min-h-full w-64 p-4">
            <ul>
              {/* Sidebar content here */}

              <div className="relative  mx-auto text-center group">
                <div className="avatar">
                  <div className="ring-primary  cursor-pointer ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                    <img src={`${user?.photoURL}`} />
                  </div>
                </div>
                <span
                  onClick={handleClick}
                  disabled={!widgetReady}
                  className="absolute cursor-pointer hidden group-hover:block text-xl transition-all duration-500  left-[104px] -translate-y-1/2  top-12"
                >
                  <FaUpload />
                </span>
              </div>
              <NavBarItems label="Home" address="/" icon={TiThMenu} />
              <NavBarItems
                label="Message"
                address="/message"
                icon={FaMessage}
              />
              <NavBarItems
                label="Notification"
                address="/notification-user"
                icon={FaBell}
              />
              <NavBarItems
                label="Setting"
                address="setting"
                icon={IoSettings}
              />
            </ul>
            <ul>
              <button
                onClick={logOutUser}
                className="flex items-center px-4 py-2 my-5 transition-colors duration-300 transform hover:bg-gray-200 text-white hover:text-gray-600 w-full text-left"
              >
                <CiLogout className="w-5 h-5" />
                <span className="mx-4 font-medium">Log Out</span>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
