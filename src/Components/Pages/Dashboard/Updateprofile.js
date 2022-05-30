import React, { useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import userpic from "./../../../Images/user.png";
import auth from "../../../firebase.init";
import Loading from "../Shared/Loading";

const Updateprofile = () => {
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  const [user, loading, error] = useAuthState(auth);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  if (updating) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-4xl font-mono font-semibold text-primary">
        Update Profile
      </h1>

      <div className="card card-side justify-center bg-base-100 shadow-xl  w-[75%]  mx-auto my-16">
        <div class="flex items-center justify-between ">
          <figure className="px-10 flex flex-col py-9">
            <div class="avatar my-10">
              <div class="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="Movie"></img>
                ) : (
                  <img src={userpic} alt="user"></img>
                )}
              </div>
            </div>
            <input
              className="border-2 border-primary rounded-2xl"
              type="text"
              name="photo"
              id=""
              defaultValue={user?.photoURL}
              placeholder="Photo Url"
              onChange={(e) => setPhotoURL(e.target.value)}
            />
            <div class="card-actions m-10 ">
              <button
                onClick={async () => {
                  await updateProfile({ displayName, photoURL });
                  alert("Updated profile");
                }}
                class="btn btn-primary"
              >
                UPDATE PROFILE
              </button>
            </div>
          </figure>
          <div class="divider lg:divider-horizontal"></div>
          <div>
            <h2 className="text-primary text-xl font-mono font-bold">
              Full Name:
            </h2>
            <p className="font-serif">
              <input
                className="border-2 border-primary rounded-2xl w-[100%]"
                type="text"
                name="name"
                onChange={(e) => setDisplayName(e.target.value)}
                defaultValue={user?.displayName}
              />
            </p>
            <p className="text-primary text-2xl font-mono font-bold">Email:</p>
            <p className="font-serif">
              <input
                className="border-2 border-primary rounded-2xl w-[100%]"
                type="text"
                name="name"
                readOnly
                defaultValue={user?.email}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Updateprofile;
