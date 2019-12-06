import React from 'react';
import styles from './App.module.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Gallery from './components/Gallery/Gallery';
import FooterContainer from './components/Footer/footer';
import ErrorBoundary from './components/ErrorBoundary/errorboundary';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={search: 'black hole'};

    this.onSearchChanged = this.onSearchChanged.bind(this);
  }

  onSearchChanged(search) {
    this.setState({search});
  }
  render() {
    const search = this.state.search;
    return(
      <div className={styles['app']}>
        <HeaderBar search={search} 
              onSearchChanged={this.onSearchChanged} />
        <div className={styles['app-container']}>      
          <ErrorBoundary>
            <Gallery search={search} />
          </ErrorBoundary>
        </div>
        <FooterContainer />
    </div>
    );
  }
}

export default App;
