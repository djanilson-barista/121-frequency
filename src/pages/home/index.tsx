import React from 'react';
import './index.scss';
import Survivor from '../survivor';
import SurvivorForm from '../survivor/form';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from 'components/header';
import Footer from 'components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Survivor} />
        <Route exact path="/survivorForm" component={SurvivorForm} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
