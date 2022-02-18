import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import { TransactionProvider } from './context/TransactionContext';
import Welcome from './components/Welcome';

ReactDOM.render(
  <TransactionProvider>
    <React.StrictMode>
      <Layout />
      <Welcome />
    </React.StrictMode>
  </TransactionProvider>,
  document.getElementById('root')
);
