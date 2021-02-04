import React from 'react';
import './index.scss';
import Survivor from '../survivor';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from 'components/header';
import Footer from 'components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Survivor} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
