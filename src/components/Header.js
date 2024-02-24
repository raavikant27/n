import React from "react";
import { LOGO } from "../utils/constant";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // an error happed
        navigate("/error");
      });
  };

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
