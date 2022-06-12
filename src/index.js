import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import GlobalStyle from './assets/styles/global/globalStyles'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <GlobalStyle/>
    <App />
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
</React.StrictMode>,
  document.getElementById('root')
);