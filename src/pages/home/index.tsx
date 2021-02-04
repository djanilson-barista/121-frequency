import React from 'react';
import { Button } from 'antd';
// import logo from "../../assets/logo.svg";
import './index.scss';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <div className="App__header__right">
          <img src="" alt="logo" />
          <h1>121 Frequency</h1>
        </div>
        <div className="App__header__left">
          <p>User Name</p>
          <img src="" alt="logo" />
          <Button>DJ</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
