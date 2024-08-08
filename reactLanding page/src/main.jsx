import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Landing from "./views/Landing.jsx";
import './index.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/landing' element={<Landing />} />
      <Route path='/' element={<Navigate to='/landing' />} />
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
