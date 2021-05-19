/** @jsxImportSource @emotion/react */
import './index.css';
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          background-color: #fff;
          color: #232221;
          margin: 0;
          font-family: 'Open Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        h1 {
          font-size: 40px;
          font-weight: 600;
          margin-top: 10px;
          line-height: 48px;
          text-decoration: none;
        }

        h2 {
          font-size: 40px;
          font-weight: 600;
          margin: 0px 0;
          line-height: 48px;
          text-decoration: none;
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
