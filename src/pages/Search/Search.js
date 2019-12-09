import React from 'react';
import axios from 'axios';
import { NASA_API_URL } from '../../services/api/nasa_api';
import normalize from '../../services/normalize/normalize';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import Gallery from '../../components/Gallery/Gallery';
import GalleryItem from '../../components/GalleryItem/GalleryItem';
import styles from './Search';

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
            console.log(response.data.collection);
            const result = normalize.search(response.data.collection.items);
            this.setState({ isLoading: false });
            this.setState({ assets: result });
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

      const galleryItems = assets.map(child => (
         <div className={styles['Gallery-item']} key={Math.random()}>
            <GalleryItem
               href={child.href}
               alt={child.alt}
               title={child.title}
            />
         </div>
      ));

      const searchContent = () => {
         if (isLoading) {
            return (
               <p>Loading</p>
            );
         }

         if (assets.length > 0) {
            return (
               <Gallery>
                  {galleryItems}
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
            <div className={styles['Search-header']}>
               <HeaderBar search={query}
                  onSearchChanged={this.onSearchChanged} />
            </div>
            <div className={styles['search-content']}>
               {searchContent()}
            </div>
         </div>
      );
   }
}

export default Search;