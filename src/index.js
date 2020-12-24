import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import operate from './logic/operate'
import calculate from './logic/calculate'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
