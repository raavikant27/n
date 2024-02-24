import React from "react";
import { useEffect } from "react";
import { LOGO } from "../utils/constant";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //sign-out successful.
      })
      .catch((error) => {
        // an error happed
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // if user call apply first time call sign nd sign up all will store in here
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // put up into the store.
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // if useer will loged in i just navigate him
        navigate("/browse");
      } else {
        //if user sign out  then i want to dispatch another action then we call another dispatch.
        dispatch(removeUser());
        // if user sign out
        navigate("/");
      }
    });
    //unsubscribe when componentto yhe onauthstatechanged callback
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-11 h-11" alt="usericon" src={user?.phtoURL} />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign)
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
