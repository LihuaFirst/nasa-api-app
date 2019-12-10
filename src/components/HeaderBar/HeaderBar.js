import React from 'react';
import { Box, Text } from "gestalt";
import nasaLogo from '../../assets/nasa-logo.svg';
import styles from './HeaderBar.module.css';

const HeaderBar = (props) => {
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
                        <Text size="xl" accessibilityLabel={1} bold>NASA<br />Image Library</Text>
                    </Box>
                    {props.children}
                </Box>
            </div>
        </header>
    );
}

export default HeaderBar;