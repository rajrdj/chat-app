import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ChatContainer from './containers/ChatContainer';
import './App.css';

const App = () => {
 return (
    <Provider store={store}>
      <div className="app">
        <h1>Chat Application</h1>
        <ChatContainer />
      </div>
    </Provider>
 );
};

export default App;
