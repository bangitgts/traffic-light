import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './traffic/reportWebVitals';
import TrafficLight from './traffic/TrafficLight';

ReactDOM.render(
  <React.StrictMode>
    <TrafficLight />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
