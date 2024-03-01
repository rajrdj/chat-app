// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Make sure this is correct

const store = configureStore({
 reducer: rootReducer,
});

export default store;
