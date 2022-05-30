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

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/purchase" element={<Purchase></Purchase>}></Route>
        <Route path="/purchase/:id" element={<SingTool></SingTool>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
        <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
        <Route path="myreview" element={<MyReview></MyReview>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
