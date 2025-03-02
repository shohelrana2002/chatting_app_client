import React from "react";
import { FaFacebook, FaGoogle, FaSpinner } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Google = () => {
  const { handleGoogle, loading, setLoading } = useAuth();
  const google = async () => {
    try {
      setLoading(true);
      await handleGoogle();
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex gap-4 justify-center items-center w-full">
      <button
        disabled={loading}
        onClick={() => google()}
        className="cursor-pointer btn-md btn btn-secondary disabled:cursor-not-allowed"
      >
        Google <FaGoogle />
      </button>
      <button
        disabled={loading}
        onClick={google}
        className="cursor-pointer disabled:cursor-not-allowed btn btn-md btn-secondary"
      >
        Facebook <FaFacebook />
      </button>
    </div>
  );
};

export default Google;
