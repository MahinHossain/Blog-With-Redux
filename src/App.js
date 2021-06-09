import "./App.css";

import { getvalue, cartItemAc } from "./redux/Action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import GoogleLogout from "react-google-login";
// or
import HomePage from "./components/HomePage";
import Riyaz from "./components/Riyaz";
function App() {
  const [isSignedIn, setisSignedIn] = useState(false);

  const login = () => <h1> login</h1>;
  const logout = () => <h1> login</h1>;

  return (
    <div>
      <HomePage />
      {/* <Riyaz /> */}
    </div>
  );
}

export default App;
