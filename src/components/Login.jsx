import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginBg } from "../utils/PageLinks";
import Header from "./Header";
import { useForm } from "react-hook-form";
import { loginValidation } from "../utils/formValidation";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [firebaseError, setFirebaseError] = useState("");
  const toogleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    setFirebaseError("");
    const { email, password } = data;

    try {
      if (!isSignInForm) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully!");
        navigate("/browse");
      }
    } catch (error) {
      setFirebaseError(error.message);
    }
  };
  return (
    <div>
      <Header />
      <div className="z-10 absolute h-px w-full bg-red-300"></div>
      <div>
        <img
          className="w-full h-full top-0 z-0 absolute"
          src={loginBg}
          alt="bg"
        ></img>
      </div>

      <form
        className="absolute flex flex-col sm:left-[35%] px-8 top-[20%] gap-8 z-10  text-white"
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
            {...register("name", loginValidation.name)}
          />
        )}
        {errors.name && <p className="text-red-100  ">{errors.name.message}</p>}
        <input
          className="border rounded-md w-full h-12 p-4 bg-black/30 text-white"
          type="email"
          autoComplete="off"
          placeholder="Enter Email address"
          {...register("email", loginValidation.email)}
        />
        {errors.email && <p className="text-red-100">{errors.email.message}</p>}
        <input
          className="border rounded-md w-full h-12 p-4 bg-black/30 text-white"
          type="password"
          placeholder="Enter Your Password"
          autoComplete="off"
          {...register("password", loginValidation.password)}
        />
        {errors.password && (
          <p className="text-red-100">{errors.password.message}</p>
        )}
        {firebaseError && <p className="text-red-600">{firebaseError}</p>}
        <button
          className="h-12 w-full text-white bg-red-600 rounded text-xl font-bold hover:bg-red-800"
          type="Submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : isSignInForm ? "SignIn" : "SignUp"}
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
