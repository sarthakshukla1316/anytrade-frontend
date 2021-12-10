import { Box, Button, TextareaAutosize, makeStyles, Typography } from '@material-ui/core';
import { useState, useContext, useEffect } from 'react';

import {LoginContext} from '../../context/ContextProvider';
import { getReviews, newReview } from '../../service/api';
import Swal from 'sweetalert2';
import Review from './Review';


const useStyles = makeStyles({
    component: {
        marginTop: 50,
        marginBottom: 50,
        display: 'flex'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: '50%'
    },
    textarea: {
        width: '100%',
        margin: '0 20px'
    },
    button: {
        height: 40
    },
    heading: {
        fontSize: 20,
        fontWeight: 600,
        textAlign: 'center',
        marginTop: 20
    }
})

const initialValues = {
    name: '',
    productId: '',
    date: new Date(),
    review: ''
}


const Reviews = ({ product }) => {
    const classes = useStyles();
    const url = 'https://static.thenounproject.com/png/12017-200.png';
    const input = document.getElementById('inp');
    const Swal = require('sweetalert2');

    const {account, setAccount} = useContext(LoginContext);
    const [review, setReview] = useState(initialValues);
    const [reviews, setReviews] = useState([]);
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        const getData = async () => {
            const response = await getReviews(product.id);
            setReviews(response);
        }
        getData();
    }, [product, toggle]);



    const handleChange = (e) => {
        setReview({
            ...review,
            name: account,
            productId: product.id,
            review: e.target.value
        })
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

    const postReview = async () => {
        await newReview(review);
        setToggle(prev => !prev);
        input.value = '';
    }

    return (
        <Box style={{maxWidth: '95%'}}>
            <Typography className={classes.heading}>Reviews</Typography>
            <Box className={classes.component}>
                <img src={url} alt="" className={classes.image} />
                <TextareaAutosize 
                    id="inp"
                    rowsMin={5} 
                    className={classes.textarea} 
                    onChange={(e) => handleChange(e)}
                />
                {
                    account 
                    ? 
                        <Button 
                        variant="contained" 
                        color="primary" 
                        size="medium" 
                        className={classes.button}
                        onClick={() => postReview()}
                        >
                            Post
                        </Button>
                    :
                        <Button 
                            variant="contained" 
                            color="#D0D0D0" 
                            size="medium" 
                            className={classes.Button}
                            onClick={() => pleaseLogin()}
                        >
                            Post
                        </Button>
                }
                
            </Box>
            {
                reviews && reviews.map(review => (
                    <Review review={review} setToggle={setToggle} account={account} />
                )) 

            }
        </Box>
    )
}

export default Reviews
