import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Reset from './UI/Reset'
import GlobalStyles from './UI/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyles />


    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
