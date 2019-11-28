import React from 'react';
import {Box} from 'gestalt';

const Poster = (props) => (
   <Box>
      <img src="{props.href}" 
            alt="{props.alt}" 
            title="{props.title}"
      />
   </Box>
);

export default Poster;