import { AppBar, Toolbar, makeStyles, Typography, Box, withStyles, IconButton, Drawer, List, ListItem } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import logoURL from '../../images/logo.png';
import subURL from '../../images/plus.png';    // Logo images

import SearchBar from './SearchBar';  //  Components
import HeaderButtons from './HeaderButtons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
    header: {
        background: '#2874f0',
        height: 55
    },
    logo: {
        width: 75
    },
    subURL: {
        width: 10,
        marginLeft: 4,
        height: 10
    },
    container: {
        display: 'flex'
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        textDecoration: 'none',
        color: '#fff'
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    },
    plusColor: {
        color: '#FFE500'
    },
    list: {
        width: 220
    },
    menuButton: {
        display: 'none',
        zIndex: 99,
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    headerButtons: {
        margin: '0 7% 0 auto',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))

const ToolBar = withStyles({
    root: {
        minHeight: 55
    }
})(Toolbar);

const Header = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    
    }
    const handleOpen = () => {
        setOpen(true);
    }

    const list = () =>  (
            <Box className={classes.list} >
                <List>
                    <ListItem>
                        <HeaderButtons handleClose={handleClose} />
                    </ListItem>
                </List>
            </Box>
        )

    return (
        <AppBar className={classes.header}>
            <ToolBar>

                <IconButton
                    color="inherit"
                    className={classes.menuButton}
                    onClick={handleOpen}
                >
                    <Menu />
                </IconButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>


                <Link to='/' className={classes.component}>
                    <img src={logoURL} alt="Flipkart" className={classes.logo} />
                    <Box className={classes.container}>
                        <Typography className={classes.subHeading}>
                            Explore <Box component="span" className={classes.plusColor}>Plus</Box>
                        </Typography>
                        <img src={subURL} alt="Gold" className={classes.subURL} />
                    </Box>
                </Link>
                <SearchBar />
                <span className={classes.headerButtons}><HeaderButtons /></span>
            </ToolBar>
        </AppBar>
    );
}

export default Header;
