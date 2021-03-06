import React from 'react';
import './index.scss';

import App from "./App";

import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {store} from "./business/store";
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
);