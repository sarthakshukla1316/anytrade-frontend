import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import clsx from 'clsx';

import ActionItems from "./ActionItems";
import ProductDetail from "./ProductDetail";
import Reviews from "../reviews/Reviews";

const useStyles = makeStyles(theme => ({
    component: {
        marginTop: 55,
        background: '#f2f2f2'
    },
    container: {
        // margin: '0 80px',
        background: '#fff',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *': {
            fontSize: 14,
            marginTop: 10
        }
    },
    greyTextColor: {
        color: '#878787'
    },
    price: {
        fontSize: 28
    }
}))

const DetailView = ({ match }) => {
    const classes = useStyles();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';


    const { product } = useSelector(state => state.getProductDetails);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getProductDetails(match.params.id));
    }, [dispatch]);

    return (
        <Box className={classes.component}>
            { product && Object.keys(product).length && 
            <Grid container className={classes.container}>

                <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItems product={product} />
                </Grid>

                <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                    <Typography>{product.title.longTitle}</Typography>
                    <Typography className={clsx(classes.smallText, classes.greyTextColor)}>
                        8 Ratings & 1 Review
                        <span><img src={fassured} alt="" style={{ width: 77, marginLeft: 20}} /></span>
                    </Typography>
                    <Typography>
                        <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                        <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                        <span style={{ color: '#388C3C'}}>{product.price.discount} off</span>
                    </Typography>
                    <ProductDetail product={product} />
                </Grid>
                
            </Grid>
            }
            <Reviews product={product} />
        </Box>
    );
}

export default DetailView;
