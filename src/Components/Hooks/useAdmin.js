import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminloading, setAdminLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://manufacturer-server-wxrs.vercel.app/users/addadmin?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.admin);
        setAdmin(data.admin);
        setAdminLoading(false);
      });
  }, [user]);
  return [admin, adminloading];
};

export default useAdmin;
