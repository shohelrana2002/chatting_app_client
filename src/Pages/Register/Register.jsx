import React, { useState } from "react";
import { useForm } from "react-hook-form";
import singUpImage from "/Forms-bro.png";
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
const Register = () => {
  const navigate = useNavigate();
  const { handleUserCreate } = useAuth();
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await handleUserCreate(data.email, data.password);
      toast.success("Create a Account Successfully");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const password = watch("password", "");
  const passwordRules = [
    { text: "At least 8 characters", valid: password.length >= 8 },
    { text: "At least one uppercase letter", valid: /[A-Z]/.test(password) },
    { text: "At least one lowercase letter", valid: /[a-z]/.test(password) },
    { text: "At least one number", valid: /\d/.test(password) },
    {
      text: "At least one special character (@$!%*?&)",
      valid: /[@$!%*?&]/.test(password),
    },
  ];
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-[40%] w-full">
            <picture>
              <img className="w-full " src={singUpImage} alt={singUpImage} />
            </picture>
          </div>
          <div className="card  w-full max-w-full md:max-w-[50%] ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl text-center font-bold">SingUp</h1>
              </div>
              <div className="form-control">
                <label className="block font-semibold mb-2">
                  Name
                  {errors.name && (
                    <span className="text-red-800 font-bold"> *</span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Enter Yor Name"
                  {...register("name", {
                    required: true,
                    maxLength: 20,
                    pattern:
                      /^[\u0980-\u09FFa-zA-Z]+([-' ][\u0980-\u09FFa-zA-Z]+)*$/, //add one space to name
                  })}
                  className="input input-bordered w-full pr-10"
                />
                {errors.name && (
                  <p className="text-red-800 ">Name is Required </p>
                )}
              </div>
              <div className="form-control">
                <label className="block font-semibold mb-2">
                  Photo URL
                  {errors.photoURL && (
                    <span className="text-red-800 font-bold"> *</span>
                  )}
                </label>
                <input
                  type="url"
                  placeholder="Photo URL"
                  {...register("photoURL", {
                    required: true,
                    pattern: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
                  })}
                  className="input input-bordered w-full pr-10"
                />
                {errors.photoURL && (
                  <p className="text-red-800 ">photo is Required *</p>
                )}
              </div>
              <div className="form-control">
                <label className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/i,
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
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: "Password does not meet the criteria.",
                      },
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

                {/*  Validation List */}
                <ul className="mt-2 text-sm">
                  {passwordRules.map((rule, index) => (
                    <li
                      key={index}
                      className={`flex items-center gap-2 ${
                        rule.valid ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {rule.valid ? "✅" : "❌"} {rule.text}
                    </li>
                  ))}
                </ul>

                {/* Final Error Message */}
                {errors.password && (
                  <p className="text-red-800 mt-2">{errors.password.message}</p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className=" btn btn-primary w-full pr-10"
                  type="submit"
                  value="Sing Up"
                />
              </div>
              <div className="text-center mt-5">
                <p>
                  Already registered?
                  <Link className="text-red-800 font-bold" to={"/login"}>
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
    </>
  );
};

export default Register;
