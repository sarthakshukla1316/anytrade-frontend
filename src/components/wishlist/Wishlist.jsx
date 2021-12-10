import { useSelector } from 'react-redux'; 
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import WishlistItem from './WishlistItem';
import EmptyWishlist from './EmptyWishlist';
import { removeFromWishlist } from '../../redux/actions/wishlistActions';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles(theme => ({
    component: {
        // marginTop: 55,
        padding: '30px 135px',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            padding: '15px 10px'
        }
    },
    leftComponent: {
        // width: '67%',
        paddingRight: 15,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '15px'
        }
    },
    header: {
        padding: '15px 24px',
        background: '#fff'
    }
}));

const Wishlist = () => {
    const classes = useStyles();

    const { wishlistItems } = useSelector(state => state.wishlist);
    const dispatch = useDispatch();

    const removeItemFromWishlist = (id) => {
        dispatch(removeFromWishlist(id));
    }

    return (
        <>
            {
                wishlistItems.length ? 
                    <Grid container className={classes.component}>
                        <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
                            <Box className={classes.header}>
                                <Typography style={{fontWeight: 600, fontSize: 18}}>My Wishlist ({wishlistItems.length})</Typography>
                            </Box>
                            {
                                wishlistItems.map(item => (
                                    <WishlistItem item={item} removeItemFromWishlist={removeItemFromWishlist} />
                                ))
                            }
                            
                        </Grid>
                        
                    </Grid> 
                
                    : <EmptyWishlist />
            }
        </>
    );
}

export default Wishlist;
