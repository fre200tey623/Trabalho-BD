import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import AppCard from "./AppCard.js"


ReactDOM.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AppCard" element={<AppCard />} />
    </Routes>
   
  </BrowserRouter>,
    document.getElementById("root")
)
