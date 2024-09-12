import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import App from "./App";


ReactDOM.render(
    <BrowserRouter basename="/react-hackathon-team-website">
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
