import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    component: {
        margin: '80px 140px',
        width: '80%',
        background: '#fff',
        height: '65vh',
        [theme.breakpoints.down('sm')]: {
            margin: '20px 40px'
        }
    },
    image: {
        width: '15%'
    },
    container: {
        textAlign: 'center',
        paddingTop: 70,
        '& > *': {
            marginTop: 10,
            fontSize: 14
        }
    },
    button: {
        marginTop: 20,
        padding: '12px 70px',
        borderRadius: 2,
        fontSize: 14,
        background: '#2874f0',
        color: '#fff'
    }
}))

const EmptyWishlist = () => {
    const classes = useStyles();
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    const history = useHistory();

    const addItem = () => {
        history.push('/');
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <img src={imgurl} alt="" className={classes.image} />
                <Typography>Your Wishlist is empty!</Typography>
                <Typography>Add items to it now.</Typography>
                <Button className={classes.button} variant="contained" onClick={() => addItem()}>Shop now</Button>
            </Box>
        </Box>  
    );
}

export default EmptyWishlist;
