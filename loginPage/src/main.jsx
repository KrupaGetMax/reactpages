import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Login from "./views/Login.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
