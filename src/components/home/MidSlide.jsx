import { Box, makeStyles } from '@material-ui/core';
import Slide from './Slide';

const useStyle = makeStyles(theme => ({
    component: {
        display: 'flex'
    },
    leftComponent: {
        width: '83%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    rightComponent: {
        marginTop: 12,
        background: '#FFFFFF',
        width: '17%',
        marginLeft: 10,
        padding: 5,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }
}));

const MidSlide = ({products}) => {
    const classes = useStyle();
    const addURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return (
        <Box className={classes.component}>
            <Box className={classes.leftComponent}>
                <Slide 
                    timer={true}
                    title="Deal of the Day"
                    products={products}
                />
            </Box>
            <Box className={classes.rightComponent}>
                <img src={addURL} alt="" style={{width: 230}} />
            </Box>
        </Box>
    )
}

export default MidSlide;
