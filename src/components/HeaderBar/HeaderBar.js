import React from 'react';
import { Box, Text, SearchField } from "gestalt";
import nasaLogo from '../../assets/nasa-logo.svg';

import styles from './HeaderBar.module.css';

class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onSearchChanged(e.target.value);
    }

    render() {
        return (
            <header className={styles['header']}>
                <div className={styles['header-wrapper']}>
                    <Box padding={3}
                        color="white"
                        shape="rounded"
                        display="flex"
                        direction="row"
                        alignItems="center"
                    >
                        <img src={nasaLogo}
                            alt="NASA logo"
                            title="Nasa logo"
                            className={styles['header-logo']} />

                        <Box padding={3}>
                            <Text size="xl" accessibilityLabel={1} bold>NASA Image<br /> &amp; Video Library</Text>
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
                </div>
            </header>
        );
    }
}

export default HeaderBar;