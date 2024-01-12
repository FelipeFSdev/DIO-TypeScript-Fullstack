import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './Components/Card';
import { Layout } from './Components/Layout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>

      <Card
        id={1}
        subtitle='This is a Subcard'
        paragraph='This is just an example of properties inside components'
      />
      <Layout>
        <Card
          id={2}
          subtitle='This is a Subcard inside a layout'
          paragraph='This is just a second example of components nested into components' />
      </Layout>
    </div>
  );
}

export default App;
