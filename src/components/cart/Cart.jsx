import { useDispatch, useSelector } from 'react-redux'; 
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import CartItem from './CartItem';
import { useContext } from 'react';

import {LoginContext} from '../../context/ContextProvider';

import { removeFromCart } from '../../redux/actions/cartActions';
import EmptyCart from './EmptyCart';
import TotalView from './TotalView';

import { payUsingPaytm } from "../../service/api";
import { post } from '../../util/paytm';

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
    },
    placeOrder: {
        background: '#fb641b',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        height: 50,
        display: 'flex',
        marginLeft: 'auto'
    },
    placeLoginOrder: {
        background: '#D0D0D0',
        color: '#000',
        borderRadius: 2,
        width: 250,
        height: 50,
        display: 'flex',
        marginLeft: 'auto',
        cursor: 'not-allowed'
    },
    bottom: {
        padding: '16px 22px',
        background: '#fff',
        borderTop: '1px solid #f0f0f0',
        boxShadow: '0 2px 10px 0 rgb(0 0 0 /10%)'
    }
}));

const Cart = () => {
    const classes = useStyles();
    const Swal = require('sweetalert2');

    const {account, setAccount} = useContext(LoginContext);

    const { cartItems } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'sarthakshukla1317@gmail.com'});

        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information);
    }

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    const pleaseLogin = () => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Please Sign in to Continue!',
            showConfirmButton: true,
            timer: 2000
        })
    }

    

    return (
        <>
            {
                cartItems.length ? 
                    <Grid container className={classes.component}>
                        <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
                            <Box className={classes.header}>
                                <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems.length})</Typography>
                            </Box>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item} removeItemFromCart={removeItemFromCart} />
                                ))
                            }
                            <Box className={classes.bottom}>
                                {
                                    account ? <Button onClick={() => buyNow()} variant="contained" className={classes.placeOrder}>Place Order</Button>
                                            : <Button variant="contained" onClick={() => pleaseLogin()} className={classes.placeLoginOrder}>Place Order</Button>
                                }
                                
                            </Box>
                        </Grid>
                        
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView cartItems={cartItems} />
                        </Grid>
                    </Grid> 
                
                    : <EmptyCart />
            }
        </>
    );
}

export default Cart;
