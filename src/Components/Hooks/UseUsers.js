const UseUsers = (user) => {
  const url = `http://localhost:5000/users?email=${user.email}`;
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
