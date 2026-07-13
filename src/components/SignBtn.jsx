import { Link } from "react-router-dom";
const SignBtn = () => {
  return (
    <div className="pr-34 py-6">
      <Link
        to="/login"
        className="inline-flex items-center justify-center rounded-sm bg-red-600 px-4 py-2 text-white transition hover:bg-red-800"
      >
        Sign In
      </Link>
    </div>
  );
};

export default SignBtn;
