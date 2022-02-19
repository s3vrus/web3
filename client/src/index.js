import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import { TransactionProvider } from './context/TransactionContext';

ReactDOM.render(
  <TransactionProvider>
    <Layout />
  </TransactionProvider>,
  document.getElementById('root')
);
