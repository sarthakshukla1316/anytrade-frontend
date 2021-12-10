import axios from 'axios';

const URL = 'http://localhost:8000';

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${URL}/signup`, user);
    } catch(error) {
        console.log('Error while calling Signup api', error);
    }
}


export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${URL}/login`, user);
    } catch(error) {
        console.log('Error while calling login api', error);
    }
}




export const newReview = async (data) => {
    try {
        return await axios.post(`${URL}/review/new`, data);
    } catch(error) {
        console.log('Error while calling new review api', error);
    }
}


export const getReviews = async (id) => {
    try {
        let response =  await axios.get(`${URL}/reviews/${id}`);
        return response.data;
    } catch(error) {
        console.log('Error while calling get review api', error);
    }
}


export const deleteReview = async (id) => {
    try {
        return await axios.delete(`${URL}/review/delete/${id}`);
    } catch(error) {
        console.log('Error while calling delete review api', error);
    }
}




export const payUsingPaytm = async (data) => {
    try {
        let response =  await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch(error) {
        console.log('Error while calling paytm api', error);
    }
}