import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";


import AddPost from "./pages/AddPost";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Register from "./pages/Register";
import Home from "./pages/Home";

import { useState, useEffect } from "react";
import axios from "axios";

import { AuthContext } from "./helpers/AuthContext";

const App = () => {

  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  })


  /*useEffect(() => {
    axios.get("http://localhost:3001/api/auth/auth").then((response) => {
        if (response.data.error) {
            alert(response.data.error);
            setAuthState({...authState, status: false});
        } 
        else {
            setAuthState({
                username: response.data.username,
                id: response.data.id,
                status: true,
            });
        }
    });
}, [])*/

  return (
    <Router>
      <Routes>
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<Posts />} />
        <Route path ="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
