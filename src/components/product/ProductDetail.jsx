import { Box, Typography, makeStyles, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { LocalOffer as Badge } from '@material-ui/icons';

const useStyle = makeStyles({
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *' :{
            fontSize: 14,
            marginTop: 10
        }
    },
    greyTextColor: {
        color: '#878787'
    },
    badge: {
        marginRight: 10,
        color: '#00CC00',
        fontSize: 15
    },
    wrapper: {
        display: 'flex'
    }
});

const ProductDetail = ({product}) => {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));

    return (
        <>
            <Typography style={{marginTop: 20, fontWeight: 600}}>Available Offers</Typography>
                    <Box className={classes.smallText}>
                        <Typography>
                            <Badge className={classes.badge} />Special PriceGet extra 43% off (price inclusive of discount) T&C
                        </Typography>
                        <Typography>
                            <Badge className={classes.badge} />Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C
                        </Typography>
                        <Typography>
                            <Badge className={classes.badge} />Bank Offer20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik T&C
                        </Typography>
                        <Typography>
                            <Badge className={classes.badge} />Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply T&C
                        </Typography>
                    </Box>

                    <Table>
                        <TableBody>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                                <TableCell style={{fontWeight: 600}}>{date.toDateString()} | ₹40</TableCell>
                            </TableRow>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                                <TableCell>No Warranty</TableCell>
                            </TableRow>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Seller</TableCell>
                                <TableCell className={classes.smallText}>
                                    <span style={{color: '#2874f0'}}>Samsung India</span>
                                    <Typography>GST invoice Available</Typography>
                                    <Typography>14 Days Return Policy</Typography>
                                    <Typography>View more sellers starting from ₹399</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <img src={adURL} alt="" style={{width: 390}} />
                                </TableCell>
                            </TableRow>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
        </>
    )
}

export default ProductDetail
