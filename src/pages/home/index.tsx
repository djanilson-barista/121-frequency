import React from 'react';
import './index.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from 'components/header';
import Footer from 'components/footer';
import Survivor from 'pages/survivor';
import SurvivorForm from 'pages/survivor/form';
import store from 'stores';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Survivor} />
          <Route exact path="/survivor" component={Survivor} />
          <Route exact path="/survivorForm" component={SurvivorForm} />
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
