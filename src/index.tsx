import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createClient, Provider, defaultExchanges, subscriptionExchange } from 'urql';
import { createClient as createWSClient } from 'graphql-ws';
import './index.css';
import logoDark from './images/logo-dark.png';
import logoLight from './images/logo-light.png';
import Home from './pages/Home';
import Project from './pages/Project';
import reportWebVitals from './reportWebVitals';
import { Projects } from './components/projects/Projects';

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

const darkMode = false;

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <div className={'min-h-screen flex flex-col'}>
        <div className={'flex justify-center w-full'}>
          <img className={'w-32'} src={darkMode ? logoDark : logoLight} alt="logo" />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:projectId" element={<Project />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
