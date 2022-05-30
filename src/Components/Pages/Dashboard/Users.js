import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Users = () => {
  const [user, loading, error] = useAuthState(auth);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://toolex-factory.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleAdmin = (email) => {
    fetch(
      `http://localhost:5000/users/addadmin?email=${email}&requster=${user.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr>
                <td>{u.email}</td>
                <td>
                  {u.role !== "admin" && (
                    <button
                      onClick={() => handleAdmin(u.email)}
                      className="btn btn-primary"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {" "}
                  <button className="btn btn-warning"> Remove User</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
