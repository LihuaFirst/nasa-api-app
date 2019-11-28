import React from 'react';
import axios from 'axios';
import {Box, Masonry, Text} from 'gestalt';

class Homepage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         error: null,
         isLoaded: false,
         items: []
      }
   }

   componentDidMount() {
      let keyword ="moon%20landing";
      const url = "https://images-api.nasa.gov/search?media_type=image&q="+keyword;

      axios.get(url)
         .then( (res) => {            
            const response = res.data.collection.items;
            // console.log(response);
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
   }

   render() {
      return(
         <Masonry 
            comp={i => (<Poster href={i.data.href} alt={i.data.alt} title={i.data.title} />)}
            items={this.state.items}
            minCols={1}
            flexible={true}
            gutterWidth={3}
         /> 
         
      );
   }
}

const Poster = (props) => (
   <Box className="poster">
      <img src={props.href}
           alt={props.alt}
           title={props.title}
           className="poster-image"
      />
      <Text>{props.title}</Text>
   </Box>
);

export default Homepage;