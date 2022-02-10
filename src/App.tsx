import React from 'react';
import { createClient, Provider, defaultExchanges, subscriptionExchange } from 'urql';
import { createClient as createWSClient } from 'graphql-ws';
import * as Avatar from '@radix-ui/react-avatar';
import { ProjectsList } from './components/projects/Projects';
import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <Provider value={client}>
      <div>
        <header>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <Avatar.Root className="">
            <Avatar.Image
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              alt="Colm Tuite"
            />
            <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
          </Avatar.Root>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ProjectsList />
        </header>
      </div>
    </Provider>
  );
}

export default App;
