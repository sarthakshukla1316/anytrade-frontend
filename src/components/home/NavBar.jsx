import { navData } from '../../constants/data';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { getProductByCategory } from '../../redux/actions/productActions';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({
    component: {
        display: 'flex',
        margin: '55px 130px 0 130px',
        justifyContent: 'space-between',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container: {
        textAlign: 'center',
        padding: '12px 8px',
        cursor: 'pointer'
    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}));

const NavBar = () => {
    const classes = useStyles();
    const history = useHistory();

    const dispatch = useDispatch();

    const getProductByCat = (category) => {
        dispatch(getProductByCategory(category));
        history.push(`/product/category/${category}`);
    }

    return (
        <Box className={classes.component}>
            {
                navData.map(data => (
                    <Link onClick={() => getProductByCat(data.category)} className={clsx(classes.container, classes.link)}>
                        <img src={data.url} alt="" className={classes.image} />
                        <Typography className={classes.text}>{data.text}</Typography>
                    </Link>
                ))
            }
            
        </Box>
    );
}

export default NavBar;
