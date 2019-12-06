import React from 'react';
import axios from 'axios';
import {Masonry} from 'gestalt';
import GalleryItem from '../GalleryItem/GalleryItem';

class Gallery extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         error: null,
         isLoaded: false,
         items: []
      }
      this.loadItems(props.search);
   }

   componentWillReceiveProps(nextProps) {
      this.loadItems(nextProps.search);
   }

   loadItems = (query) => {
      const url = "https://images-api.nasa.gov/search?media_type=image&q="+encodeURI(query);

      axios.get(url)
         .then( (res) => {            
            const response = res.data.collection.items;
            console.log(response);
            let items = response.map(item => {
               var rObj = {};
               rObj['href'] = item.links[0].href;
               rObj['alt'] = item.data[0].description_508;
               rObj['title'] = item.data[0].title;
               return rObj;
            })

            this.setState({
               isLoaded: true,
               items: items
            });
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            //console.log(this.state.items);
         });
   };

   render() {
      return(
         <Masonry 
            comp={i => (<GalleryItem href={i.data.href} alt={i.data.alt} title={i.data.title} />)}
            items={this.state.items}
            minCols={1}
            flexible={true}
            gutterWidth={3}
         /> 
         
      );
   }
}

export default Gallery;