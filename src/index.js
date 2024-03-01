// src/index.js or wherever you're using the Provider
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'; // Ensure this path is correct
import App from './App';

ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>,
 document.getElementById('root')
);
