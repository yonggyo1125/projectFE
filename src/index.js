import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './pages/commons/ErrorPage';
import UserContext from './modules/user';

import reportWebVitals from './reportWebVitals';

import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext.Provider value={{ isLogin: false, userInfo: {} }}>
      <HelmetProvider>
        <BrowserRouter>
          <ErrorPage>
            <App />
          </ErrorPage>
        </BrowserRouter>
      </HelmetProvider>
    </UserContext.Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
