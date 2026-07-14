import BodyLayout from "./components/BodyLayout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "./utils/firebase";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse", { replace: true });
      } else {
        dispatch(removeUser());
        navigate("/", { replace: true });
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
