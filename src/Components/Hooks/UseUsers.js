const UseUsers = (user) => {
  const url = `https://manufacturer-server-wxrs.vercel.app/users?email=${user.email}`;
  fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
export default UseUsers;
