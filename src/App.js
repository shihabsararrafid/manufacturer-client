import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Pages/Home/Navbar";
import Notfound from "./Components/Pages/Notfound";

import Footer from "./Components/Pages/Shared/Footer";
import Purchase from "./Components/Pages/Purchase/Purchase";
import SingTool from "./Components/Pages/Purchase/SingTool";
import Login from "./Components/Pages/Authentication/Login";
import Register from "./Components/Pages/Authentication/Register";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import MyOrders from "./Components/Pages/Dashboard/MyOrders";
import MyProfile from "./Components/Pages/Dashboard/MyProfile";
import MyReview from "./Components/Pages/Dashboard/MyReview";
import Updateprofile from "./Components/Pages/Dashboard/Updateprofile";
import RequireAuth from "./Components/Pages/Authentication/RequireAuth";
import Users from "./Components/Pages/Dashboard/Users";
import Blog from "./Components/Pages/Blogs/Blog";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <SingTool></SingTool>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        ></Route>
        <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
        <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
        <Route path="myreview" element={<MyReview></MyReview>}></Route>
        <Route path="users" element={<Users></Users>}></Route>
        <Route path="blogs" element={<Blog></Blog>}></Route>

        <Route
          path="myprofile/updateprofile"
          element={<Updateprofile></Updateprofile>}
        ></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
