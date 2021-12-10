import { useSelector } from 'react-redux'; 
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import SingleProduct from './SingleProduct';

import { getProducts } from '../../redux/actions/productActions';

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

const AllProducts = () => {
    const classes = useStyles();

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();



    return (
        <>
            {
                    <Grid container className={classes.component}>
                        <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
                            <Box className={classes.header}>
                                <Typography style={{fontWeight: 600, fontSize: 18}}>All Products</Typography>
                            </Box>
                            {
                                products.map(item => (
                                    <SingleProduct item={item} />
                                ))
                            }
                            
                        </Grid>
                        
                    </Grid> 
                
            }
        </>
    );
}

export default AllProducts;
