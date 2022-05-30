import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../Shared/Loading";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);

  const [admin, adminloading] = useAdmin(user);
  //   if (adminloading) {
  //     return <Loading></Loading>;
  //   }
  console.log("current user", admin);
  return (
    <div>
      <div className="drawer ">
        <div className="drawer-side">
          <label for="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 h-[80vh] overflow-y-auto w-[60%] md:w-[40%] lg:w-[25%] bg-primary  text-secondary">
            <li>{!admin && <Link to="/myorders">My Orders</Link>}</li>

            <li>
              <Link to="/myprofile">My Profile</Link>
            </li>
            <li>{admin && <Link to="/addproduct">Add a Product</Link>}</li>
            <li>{!admin && <Link to="/myreview">My Review</Link>}</li>
            <li>{admin && <Link to="/users">All Users</Link>}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
