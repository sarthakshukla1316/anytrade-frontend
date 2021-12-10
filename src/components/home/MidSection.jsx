import { Box, Grid, makeStyles } from "@material-ui/core";
import { imageURL } from "../../constants/data";
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    help: {
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120
        }
    }
}));

const MidSection = () => {
    const classes = useStyles();
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <>
            <Grid lg={12} md={12} sm={12} sx={12} container className={classes.wrapper}>
                {
                    imageURL.map(image => (
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} alt="" style={{width: '100%'}} />
                        </Grid>
                    ))
                }
            </Grid>
            <img src={url} alt="" className={clsx(classes.wrapper, classes.help)} style={{width: '100%'}} />
        </>
    );
}

export default MidSection;
