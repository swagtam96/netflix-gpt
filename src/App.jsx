import BodyLayout from "./components/BodyLayout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../src/utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "./utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div>
      <BodyLayout />
    </div>
  );
};

export default App;
