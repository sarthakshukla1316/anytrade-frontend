import { Box, Dialog, DialogContent, makeStyles, Typography, TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import { authenticateLogin, authenticateSignup } from '../../service/api';

const useStyles = makeStyles(theme => ({
    component: {
        height: '70vh',
        width: '90vh'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background: '#2874f0',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& > *': {
            color: '#FFF',
            fontWeight: 600
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    login: {
        padding: '10px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    loginBtn: {
        textTransform: 'none',
        background: '#fb641b',
        color: '#fff',
        height: 48,
        borderRadius: 2
    },
    requestBtn: {
        textTransform: 'none',
        background: '#fff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    createText: {
        textAlign: 'center',
        marginTop: 'auto',
        fontSize: 14,
        color: '#2874f0',
        fontWeight: 600,
        cursor: 'pointer'
    },
    error: {
        fontSize: 10,
        color: '#ff6161',
        marginTop: 10,
        fontWeight: 600,
        lineHeight: 0
    }
}))

const initailValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: 'Looks like you\'re new here!',
        subHeading: 'Sign up with your mobile number to get started'
    }
}


const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const loginInitialValues = {
    username: '',
    password: ''
}


const Login = ({ open, setOpen, setAccount, setUser }) => {
    const classes = useStyles();
    const [account, toggleAccount] = useState(initailValue.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);
    const [errorSignup, setErrorSignup] = useState(false);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(initailValue.login);
    }

    const toggleUserAccount = () => {
        toggleAccount(initailValue.signup);
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if(!response) {
            setErrorSignup(true);
            return;
        } 
        handleClose();
        setAccount(signup.username);
        setUser(signup);
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if(!response) {
            setError(true);
            return;
        }
        handleClose();
        setAccount(login.username);
        setUser(login);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value});
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{display: 'flex'}}>
                    <Box className={classes.image}>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ? 
                        <Box className={classes.login}>
                            <TextField onChange={(e) => onValueChange(e)} name="username" label="Enter Email/Mobile number" />
                            <TextField onChange={(e) => onValueChange(e)} name="password" label="Enter Password" />
                            { error && <Typography className={classes.error}>Username and password are not correct</Typography>}

                            <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of use and Privacy Policy.</Typography>

                            <Button onClick={() => loginUser()} variant="contained" className={classes.loginBtn}>Login</Button>

                            <Typography style={{textAlign: 'center'}} className={classes.text}>OR</Typography>
                            <Button variant="contained" className={classes.requestBtn}>Request OTP</Button>
                            <Typography onClick={() => toggleUserAccount()} className={classes.createText}>New to Flipkart? Create an account</Typography>
                        </Box>
                         : 
                            <Box className={classes.login}>
                                <TextField onChange={(e) => onInputChange(e)} name="firstname" label="Enter FirstName" />
                                <TextField onChange={(e) => onInputChange(e)} name="lastname" label="Enter LastName" />
                                <TextField onChange={(e) => onInputChange(e)} name="username" label="Enter Username" />
                                { errorSignup && <Typography className={classes.error}>Username or email already exists</Typography>}
                                <TextField onChange={(e) => onInputChange(e)} name="email" label="Enter Email" />
                                <TextField onChange={(e) => onInputChange(e)} name="password" label="Enter Password" />
                                <TextField onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone number" />
                                <Button 
                                variant="contained" className={classes.loginBtn}
                                onClick={() => signupUser()}
                                >
                                    Signup
                                </Button>
                            </Box>
                        
                    }
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default Login;
