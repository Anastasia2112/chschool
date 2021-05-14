import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import './styles/App.scss';

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById("root")
);