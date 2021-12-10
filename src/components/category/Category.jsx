import { Box, Button, Card, makeStyles, Typography } from "@material-ui/core";
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { addToWishlist } from '../../redux/actions/wishlistActions';


const useStyles = makeStyles({
    component: {
        display: 'flex',
        borderRadius: 0,
        borderTop: '1px solid #f0f0f0'
    },
    leftComponent: {
        margin: 20,
        display: 'flex',
        flexDirection: 'column'
    },
    rightComponent: {
        margin: 20
    },
    smallText: {
        fontSize: 14
    },
    greyTextColor: {
        color: '#878787'
    },
    price: {
        fontSize: 18,
        fontWeight: 600
    },
    image: {
        height: 110,
        width: 110
    },
    remove: {
        marginTop: 20,
        fontSize: 16,
        textTransform: 'none'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    cartColor: {
        background: '#ff9f00',
        color: '#fff',
        marginRight: 10
    },
    wishlistColor: {
        background: '#fb641b',
        color: '#fff'
    }
})

const Category = ({ item }) => {
    const classes = useStyles();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch();


    const addItemToCart = () => {
        dispatch(addToCart(item.id));
    }

    const addItemToWishlist = () => {
        dispatch(addToWishlist(item.id));
    }

    return (
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <Link to={`/product/${item.id}`}>
                    <img src={item.url} alt="" className={classes.image} />
                </Link>
            </Box>

            <Box className={classes.rightComponent}>
                <Link to={`/product/${item.id}`} className={classes.link}>
                    <Typography>{item.title.longTitle}</Typography>
                </Link>
                
                <Typography className={clsx(classes.smallText, classes.greyTextColor)} style={{marginTop: 10}}>
                    Seller: Blue World
                    <span><img src={fassured} alt="" style={{width: 50, marginLeft: 10}} /></span>
                </Typography>
                <Typography style={{margin: '20px 0'}}>
                    <span className={classes.price}>₹{item.price.cost}</span> &nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}><strike>₹{item.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                    <span style={{color: '#388e3c'}}>{item.price.discount} off</span>
                </Typography>

                
                <Button onClick={() => addItemToCart() } className={clsx(classes.remove, classes.cartColor)}>
                    Add to Cart
                </Button>
                    


                <Button onClick={() => addItemToWishlist()} className={clsx(classes.remove, classes.wishlistColor)} variant="contained" color="secondary">Add to Wishlist</Button>
            </Box>
        </Card>
    )
}

export default Category;
