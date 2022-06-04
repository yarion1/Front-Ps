import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './store/index.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import GlobalStyle from './assets/styles/global/globalStyles'

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <GlobalStyle/>
    <App />
  </Provider>
</React.StrictMode>,
  document.getElementById('root')
);