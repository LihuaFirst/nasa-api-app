import React from 'react';
import axios from 'axios';
import { NASA_API_URL } from '../../services/api/nasa_api';
import normalize from '../../services/normalize/normalize';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import Gallery from '../../components/Gallery/Gallery';
import styles from './Search.module.css';

class Search extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         query: 'black hole',
         assets: [],
         isLoading: true
      };
      this.onSearchChanged = this.onSearchChanged.bind(this);
   }

   componentDidMount() {
      //console.log(this.state);
      this.searchAsset(this.state.query);
   }

   searchAsset(query) {
      this.setState({ isLoading: true });

      axios.get(`${NASA_API_URL}/search?media_type=image&q=${query}`)
         .then(response => {
            //console.log(response.data);
            this.setState({ isLoading: false });
            this.setState({ assets: normalize.search(response.data.collection.items) });
         })
         .catch(error => {
            this.setState({ isLoading: false });
         })
   }

   onSearchChanged(query) {
      this.setState({ query });
   }

   render() {
      const { query, assets, isLoading } = this.state;

      const displayContent = () => {
         if (isLoading) {
            return (
               <p>Loading</p>
            );
         }

         if (assets.length > 0) {
            return (
               <Gallery>
                  {assets}
               </Gallery>
            );
         }

         if (assets.length === 0) {
            return (
               <p>Opps, no data </p>
            );
         }
      }

      return (
         <div className={styles['search-wrapper']}>
            <div className={styles['search-header']}>
               <HeaderBar search={query}
                  onSearchChanged={this.onSearchChanged} />
            </div>
            <div className={styles['search-content']}>
               {displayContent()}
            </div>
         </div>
      );
   }
}

export default Search;