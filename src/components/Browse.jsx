import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Header from "./Header";
import { auth } from "../utils/firebase";

const Browse = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/", { replace: true });
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <div className="relative min-h-screen ">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Header />
        <button
          onClick={handleSignOut}
          className="rounded-md bg-red-600 m-10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Browse;
