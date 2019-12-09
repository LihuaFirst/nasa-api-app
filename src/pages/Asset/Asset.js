import React from 'react';
import HeaderBar from '../../components/HeaderBar/HeaderBar';

class Asset extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      asset: {},
      isLoading: true
    };
  }
 
  render() {

    return (
      <div className="Asset">
        <div className="Asset-header">
          <HeaderBar />
        </div>
      </div>
    );
  }
}

export default Asset;