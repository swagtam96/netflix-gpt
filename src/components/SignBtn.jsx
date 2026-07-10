import { Link } from "react-router-dom";
const SignBtn = () => {
  return (
    <div className=" pr-34 py-6">
      <button className="bg-red-600 text-white rounded-sm w-20 p-1 hover:bg-red-800 cursor-pointer ">
        <Link to="Login">Sign In</Link>
      </button>
    </div>
  );
};

export default SignBtn;
