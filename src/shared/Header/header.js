import React from 'react';
import {Box, Icon, Text} from "gestalt";
import SearchBar from '../SearchBar/searchbar';

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state={value: ''};
    }

    render() {
        return(
            <Box 
                color="white" 
                shape="rounded" 
                padding={3} 
                display="flex" 
                direction="row" 
                alignItems="center"
            >
                <Box padding={3}>
                   <Icon icon="camera-roll" accessibilityLabel="heart" color="red" size={20}/>
                </Box>
                <Box padding={3}>
                    <Text size="xl" accessibilityLabel={1} bold>Search Movie</Text>
                </Box>
                <Box padding={3}>
                    <SearchBar />
                </Box>
            </Box>
        );
    }
}

export default HeaderContainer;