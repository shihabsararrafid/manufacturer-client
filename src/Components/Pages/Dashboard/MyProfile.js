import React from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import userpic from "./../../../Images/user.png";
const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminloading] = useAdmin(user);
  console.log(user);
  return (
    <div>
      <h1 className="text-4xl font-mono font-semibold text-primary">
        My Profile
      </h1>

      <div className="card card-side justify-center bg-base-100 shadow-xl  w-[75%]  mx-auto my-16">
        <div class="flex items-center justify-between ">
          <figure className="px-10 flex flex-col py-9">
            <div class="avatar">
              <div class="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="Movie"></img>
                ) : (
                  <img src={userpic} alt="user"></img>
                )}
              </div>
            </div>
            <div class="card-actions m-10 ">
              <Link to="updateprofile">
                {" "}
                <button class="btn btn-primary">EDIT PROFILE</button>
              </Link>
            </div>
          </figure>
          <div class="divider lg:divider-horizontal"></div>
          <div>
            <h2 className="text-primary font-mono font-bold">Full Name:</h2>
            <p className="font-serif">{user?.displayName}</p>
            <p className="text-primary font-mono font-bold">Email:</p>
            <p className="font-serif">{user?.email}</p>
            {admin && (
              <p className="font-mono text-lg font-bold text-secondary">
                Admin
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
