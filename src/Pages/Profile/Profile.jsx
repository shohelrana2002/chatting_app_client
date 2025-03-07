import React from "react";
import useAuth from "../../Hooks/useAuth";
import profile from "/profileImage.avif";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
const Profile = () => {
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();
  console.log(axiosCommon);
  return (
    <div className="my-12 flex justify-center items-center">
      <div className="bg-orange-200  p-24 rounded-2xl">
        <img
          className="w-48 mx-auto rounded-2xl h-48"
          src={profile}
          alt="photoURL"
        />
        <p> Name: {user?.displayName}</p>
        <p> email: {user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
