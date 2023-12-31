import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./index.scss";
/* import App from './App';
import reportWebVitals from './reportWebVitals'; */

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import Accomodation from "./pages/accomodation/accomodation.component";
import About from "./pages/about/about.component";

import Error from "./pages/error/error.component";
import Footer from "./components/footer/footer.component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation/:id" element={<Accomodation />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

/* // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */
