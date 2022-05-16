import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import App from './App';
import { ContextProvider } from './SocketContext';
import Background from './components/Background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ContextProvider>
    <Background></Background>
    <App />
  </ContextProvider>,
  {/* </React.StrictMode> */}
);


