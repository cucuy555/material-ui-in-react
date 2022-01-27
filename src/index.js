import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Boardroom from "./pages/boardroom/boardroom.page";
import Farm from "./pages/farm/farm.page";
import SMKPMint from "./pages/smkpMint/smkpMint.page";
import Social from "./pages/social/social.page";
import ContactUs from "./pages/contactUs/contactUs.page";
import Dashboard from "@mui/icons-material/Dashboard";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/boardroom" element={<Boardroom />} />
        <Route path="/farm" element={<Farm />} />
        <Route path="/mintsmkp" element={<SMKPMint />} />
        <Route path="/social" element={<Social />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
