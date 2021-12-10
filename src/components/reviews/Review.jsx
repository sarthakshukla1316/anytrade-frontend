import { Box, makeStyles, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import { deleteReview } from '../../service/api';

const useStyles = makeStyles({
    component: {
        margin: '30px',
        background: '#f5f5f5',
        padding: 10
    },
    container: {
        display: 'flex',
        marginBottom: 5,
    }, 
    name: {
        fontSize: 18,
        fontWeight: 600,
        marginRight: 20
    }, 
    date: {
        fontSize: 14,
        color: '#878787'
    },
    delete: {
        marginLeft: 'auto',
        cursor: 'pointer'
    }
})

const Review = ({ review, setToggle, account }) => {
    const classes = useStyles();

    const removeReview = async () => {
        await deleteReview(review._id);
        setToggle(prev => !prev);
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <Typography className={classes.name}>{review.name}</Typography>
                <Typography className={classes.date}>{new Date(review.date).toDateString()}</Typography>
                {
                    account === review.name && <Delete onClick={() => removeReview()} className={classes.delete} />
                }
                
            </Box>
            <Typography>{review.review}</Typography>
        </Box>
    )
}

export default Review;
