<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/store'
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "../src/store";
import { BrowserRouter } from "react-router-dom";
>>>>>>> a22e8a0094bcdb8e2c1988b335510c949754966d

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
  
    <Provider store={store}>
        <App/>
    </Provider>
=======
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
>>>>>>> a22e8a0094bcdb8e2c1988b335510c949754966d
);
