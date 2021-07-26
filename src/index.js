import React from 'react';
import ReactDOM from 'react-dom';
// import './Main/index.css';
import './dest/index.css';
import App from './App'
import {AppProvider} from './context'
import { BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);