import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Pages/Home/Navbar";
import Notfound from "./Components/Pages/Notfound";
import Login from "./Components/Pages/Shared/Login";
import Footer from "./Components/Pages/Shared/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
