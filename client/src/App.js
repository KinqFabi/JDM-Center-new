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
    image: "",
    status: false,
  });

  useEffect(() => {
    axios.get("http://localhost:3001/api/auth/auth", {withCredentials: true,})
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          console.log("ALLL DATA!")
          console.log(response.data)
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            image: response.data.userPicture,
            status: true,
          });
        }
      });
  }, []);

  return (
    <AuthContext.Provider value={{authState, setAuthState}}>
      <Router>
        <Routes>
          <Route path="/addPost" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/" element={<Home user={{...authState}} /> } />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
