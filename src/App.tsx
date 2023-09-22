import React from "react";
import "./App.css";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { LoginPage } from "./Pages/Login/Login";
import { UserListPage } from "./Pages/UserList/UserList";
import { HomePage } from "./Pages/Home/Home";
import { UserDetailsPage } from "./Pages/UserDetails/UserDetails";

const App = () => {
  const navigate = useNavigate();

  const handleClick = (url: string) => {
    navigate(url);
  };

  return (
    <div style={{overflow: "hidden"}}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/user-list" element={<UserListPage />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
