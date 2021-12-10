import { Box, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { ShoppingCart, FlashOn } from "@material-ui/icons";

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { useHistory } from 'react-router-dom';
import { payUsingPaytm } from "../../service/api";

import { post } from '../../util/paytm';
import { useContext } from "react";
import { LoginContext } from "../../context/ContextProvider";


const useStyles = makeStyles(theme => ({
    leftContainer: {
        minWidth: '40%',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
    },
    image: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button: {
        height: 50,
        width: '46%',
        borderRadius: 2
    },
    addToCart: {
        background: '#ff9f00',
        color: '#fff',
        marginRight: 10
    },
    buyNow: {
        background: '#fb641b',
        color: '#fff'
    }
}));

const ActionItems = ({ product }) => {
    const classes = useStyles();
    const history = useHistory();

    const { account } = useContext(LoginContext);
    
    const dispatch = useDispatch();


    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'sarthakshukla1317@gmail.com'});

        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information);
    }


    const addItemToCart = () => {
        dispatch(addToCart(product.id));
        history.push('/cart');
    }

    
    return (
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} alt="" className={classes.image} /> <br />

                <Button onClick={() => addItemToCart()} variant="contained" className={clsx(classes.button, classes.addToCart)}>
                    <ShoppingCart />&nbsp;Add to Cart
                </Button> 
                
            {
                account &&
                <Button onClick={() => buyNow()} variant="contained" className={clsx(classes.button, classes.buyNow)}><FlashOn />&nbsp;Buy Now</Button>
            }
        </Box>
    );
}

export default ActionItems;
