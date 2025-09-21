import ReactDOM from 'react-dom/client';
import { Header } from 'remoteHeader/Header';
import React, { use, useContext } from 'react';
import { ColorContext } from 'mf-pack';
import './index.css';

const App = () => {
  return (
    <ColorContext.Provider value="orange">
      <div className="container">
        <Header />
        <Logger />
        <div>Name: mf-host</div>
        <div>Framework: react-19</div>
      </div>
    </ColorContext.Provider>
  );
};

function Logger() {
  const color = useContext(ColorContext);
  console.log('### color from host', color);
  return null;
}

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(<App />);
