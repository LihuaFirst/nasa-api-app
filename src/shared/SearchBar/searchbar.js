import React from 'react';
import {SearchField} from 'gestalt';

class SearchBar extends React.Component {
   constructor(props) {
      super(props);
      this.state = {value:''};

      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(e) {
      this.setState = e.target.value;
   }

   render() {
      return(
         <SearchField 
            accessibilityLabel="search field"
            id="searchField"
            onChange={this.handleChange}
            placeholder="Search"
            value={this.state.value}
         />
      );
   }
}

export default SearchBar;