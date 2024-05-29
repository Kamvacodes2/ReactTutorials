
import React from "react";
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";


function App() {
  return (
    <div>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/profile" Component={Profile}/>
            <Route path="/sign-in" Component={SignIn}/>
            <Route path="/sign-up" Component={SignUp}/>
            <Route path="/forgot-password" Component={ForgotPassword}/>
            <Route path="/offers" Component={Offers}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
