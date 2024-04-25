import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import Toolbar from "./components/Toolbar";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { LogInConfirmation } from "./store/auth/actions";

function App() {

  // const dispatch = useDispatch();

  // useEffect(() => {
  // dispatch(LogInConfirmation());
  // }, []);

  return (
    <div>
      <Toolbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
