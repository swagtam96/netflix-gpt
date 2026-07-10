import { useState } from "react";
import { loginBg } from "../utils/PageLinks";
import Header from "./Header";
import { useForm } from "react-hook-form";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toogleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Header />
      <div className="z-10 absolute h-px w-full bg-red-300"></div>
      <div>
        <img
          className="w-screen top-0 z-0 absolute"
          src={loginBg}
          alt="bg"
        ></img>
      </div>

      <form
        className="absolute flex flex-col left-[35%] top-[20%] gap-8 z-10 text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-bold ">
          Enter your Info to {isSignInForm ? "SignIn" : "SignUp"}
        </h1>
        {!isSignInForm && (
          <input
            className="border rounded-md w-full h-12 p-4 bg-black/30 text-white"
            type="text"
            placeholder="Enter Full Name"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Minimum length of name is 2" },
            })}
          />
        )}
        {errors.name && <p className="text-red-100  ">{errors.name.message}</p>}
        <input
          className="border rounded-md w-full h-12 p-4 bg-black/30 text-white"
          type="email"
          placeholder="Enter Email address"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid Email address",
            },
          })}
        />
        {errors.email && <p className="text-red-100">{errors.email.message}</p>}
        <input
          className="border rounded-md w-full h-12 p-4 bg-black/30 text-white"
          type="password"
          placeholder="Enter Your Password"
          {...register("password", {
            required: "password is required",
            minlength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:
                "Password must contain at least one letter and one number",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-100">{errors.password.message}</p>
        )}
        <button
          className="h-12 w-full text-white bg-red-600 rounded text-xl font-bold hover:bg-red-800"
          type="Submit"
        >
          {isSignInForm ? "SignIn" : "SignUp"}
        </button>
        <p className="cursor-pointer" onClick={toogleSignInForm}>
          {isSignInForm
            ? "New to Netflix?,SignUp Now"
            : "Already a Member ,SignIn"}
        </p>
      </form>
    </div>
  );
};

export default Login;
