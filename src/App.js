import React from 'react';
import './App.css';
import HeaderContainer from './shared/Header/header';
//import HomePage from './pages/HomePage/homepage';
import FooterContainer from './shared/Footer/footer';

const App = () => (
  <div className="app">
    <HeaderContainer />
    <div className="app-container">
      {/* <HomePage /> */}
    </div>
    <FooterContainer />
  </div>
);

export default App;
