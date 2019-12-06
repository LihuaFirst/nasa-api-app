import React from 'react';
import {Box, Icon, Text, SearchField} from "gestalt";
//import SearchBar from '../SearchBar/searchbar';

class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onSearchChanged(e.target.value);
    }

    render() {
        return(
            <Box padding={3} 
                 color="white" 
                 shape="rounded"                 
                 display="flex" 
                 direction="row" 
                 alignItems="center"
            >
                <Box padding={3}>
                   <Icon icon="camera-roll" 
                         accessibilityLabel="heart" 
                        color="blue" 
                        size={20}
                   />
                </Box>
                <Box padding={3}>
                    <Text size="xl" accessibilityLabel={1} bold>NASA Image Library</Text>
                </Box>
                <Box padding={3}>
                    <SearchField 
                        accessibilityLabel="search field"
                        id="searchField"
                        onChange={this.handleChange}
                        placeholder="Search NASA images"
                        value={this.props.search}
                    />
                </Box>
            </Box>
        );
    }
}

export default HeaderBar;