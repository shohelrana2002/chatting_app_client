import { useState } from "react";
import { useForm } from "react-hook-form";
import singUpImage from "/Forms-bro.png";
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import Google from "../../Shared/SocialLink/Google";
import { getAuth, reload } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
const Login = () => {
  // Data Base Save

  const navigate = useNavigate();
  const { handleLogin, loading, setLoading } = useAuth();
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await handleLogin(data?.email, data?.password);
      // send to email and verify and reload to send message
      const auth = getAuth();
      await reload(auth.currentUser); // Refresh user info
      const currentUser = auth.currentUser;
      // console.log(currentUser);
      if (!currentUser?.emailVerified) {
        setLoading(false);
        return toast.error("Please verify your email before logging in.");
      }
      // save firebase
      const database = getDatabase();
      // let userRef = push(ref(db, "users/")); 2

      set(ref(database, `users/${currentUser?.uid}`), {
        username: currentUser?.displayName,
        email: currentUser?.email,
        profile_picture: currentUser?.photoURL,
      });
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="md:w-[40%] w-full">
          <picture>
            <img className="w-full " src={singUpImage} alt={singUpImage} />
          </picture>
        </div>
        <div className="card  w-full max-w-full md:max-w-[50%] ">
          <Google />
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl text-center font-bold">Sing In</h1>
            </div>

            <div className="form-control">
              <label className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                })}
                className="input input-bordered w-full pr-10"
              />
              {errors.email && (
                <p className="text-red-800 ">Email is Required</p>
              )}
            </div>

            <div className="form-control ">
              <label className="block font-semibold mb-2">Password</label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="input input-bordered w-full pr-10"
                />
                {/* Show/hide password button */}
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-600"
                  onClick={() => setShow(!show)}
                >
                  {show ? "🙈" : "👁️"}
                </button>
              </div>

              {/* Final Error Message */}
              {errors.password && (
                <p className="text-red-800 mt-2">{errors.password.message}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button
                disabled={loading}
                className=" btn btn-primary w-full pr-10 text-xl"
                type="submit"
              >
                {loading ? (
                  <FaSpinner className="animate-spin text-primary text-xl font-bold m-auto" />
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
            <div className="text-center mt-5">
              <p>
                Are You New?
                <Link to="/register" className="text-red-800 font-bold">
                  Go to log in
                </Link>
              </p>
            </div>
          </form>
          <div className=" w-full text-center">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
