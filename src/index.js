import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
      <h1>GitHub Repo Search</h1>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
