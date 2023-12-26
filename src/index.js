import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Context from "./component/caculator/context/context";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Context>
          <App />
      </Context>

  </React.StrictMode>
);

