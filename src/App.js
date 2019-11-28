import React from 'react';
import './App.css';
import HeaderContainer from './shared/Header/header';
import HomePage from './pages/HomePage/homepage';
import FooterContainer from './shared/Footer/footer';
import ErrorBoundary from './shared/ErrorBoundary/errorboundary';

const App = () => (
  <div className="app">
    <HeaderContainer />
    <div className="app-container">      
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    </div>
    <FooterContainer />
  </div>
);

export default App;
