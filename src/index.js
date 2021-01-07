import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//If you are using something like create-react-app to bang out boiler
//you will have a wrapper in your index.js like this: <React.StrictMode>. 
//This apparently fires input-related events twice to force you to write better code (ie pure deterministic functions) 

ReactDOM.render(<App />,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
