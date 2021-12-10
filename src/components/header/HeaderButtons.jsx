import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import { ShoppingCart }  from '@material-ui/icons';
// import { KeyboardArrowDown } from '@material-ui/icons';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import LoginDialog from "../login/Login";  // components
import {LoginContext} from '../../context/ContextProvider';
import Profile from "./Profile";
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    login: {
        background: '#fff',
        color: '#2874F0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            background: '#2874f0',
            color: '#ffffff'
        }
    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            alignItems: 'center',
            textDecoration: 'none',
            color: '#fff',
            [theme.breakpoints.down('sm')]: {
                color: '#2874f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: 15
            }
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    container: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'row'
        }
    },
    more: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'row'
        }
    }
}));

const HeaderButtons = ({handleClose}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const {account, setAccount, user, setUser} = useContext(LoginContext);

    const { cartItems } = useSelector(state => state.cart);
    const { wishlistItems } = useSelector(state => state.wishlist);

    const openLoginDialog = () => {
        setOpen(true);
    }

    return (
        <Box className={classes.wrapper}>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                <Link>
                    <Button 
                    variant="contained" 
                    className={classes.login}
                    onClick={() =>openLoginDialog()}
                    >
                        Login
                    </Button>
                </Link>
            }
            {/* <Link className={classes.more} onClick={handleClose}>
                <Typography style={{marginTop: 5}}>More</Typography>
                <KeyboardArrowDown />
            </Link> */}

            <Link to='/wishlist' className={classes.container} onClick={handleClose}>
                <Badge badgeContent={wishlistItems.length} color="secondary">
                    <BookmarkIcon />
                </Badge>
                <Typography style={{marginLeft: 10}}>Wishlist</Typography>
            </Link>
            
            <Link to='/cart' className={classes.container} onClick={handleClose}>
                <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{marginLeft: 10}}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} setUser={setUser} />
        </Box>
    );
}

export default HeaderButtons;
