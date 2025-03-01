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
        onClick={google}
        className="cursor-pointer  btn btn-secondary"
      >
        {loading ? (
          <FaSpinner className="animate-spin text-xl text-yellow-500 font-bold m-auto" />
        ) : (
          <>
            Google <FaGoogle />
          </>
        )}
      </button>
      <button
        disabled={loading}
        onClick={google}
        className="cursor-pointer  btn btn-secondary"
      >
        {loading ? (
          <FaSpinner className="animate-spin text-xl text-yellow-500 font-bold m-auto" />
        ) : (
          <>
            Facebook <FaFacebook />
          </>
        )}
      </button>
    </div>
  );
};

export default Google;
