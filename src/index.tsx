import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createClient, Provider, defaultExchanges, subscriptionExchange } from 'urql';
import { createClient as createWSClient } from 'graphql-ws';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const wsClient = createWSClient({
  url: 'ws://hiring-nicolas-2.hasura.app/v1/graphql',
});

const client = createClient({
  url: 'https://hiring-nicolas-2.hasura.app/v1/graphql',
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: (operation) => ({
        subscribe: (sink) => ({
          unsubscribe: wsClient.subscribe(operation, sink),
        }),
      }),
    }),
  ],
});

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
