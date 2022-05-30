import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>This is dashboard</h1>
      <div className="drawer ">
        <div className="drawer-side">
          <label for="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 h-[80vh] overflow-y-auto w-[60%] md:w-[40%] lg:w-[25%] bg-primary  text-secondary">
            <li>
              <Link to="/myorders">My Orders</Link>
            </li>
            <li>
              <Link to="/myprofile">My Profile</Link>
            </li>
            <li>
              <Link to="/myreview">My Review</Link>
            </li>
            <li>
              <Link to="/users">All Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
