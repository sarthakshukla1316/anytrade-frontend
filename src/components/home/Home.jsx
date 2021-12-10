import { Box, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Banner from "./Banner";   // Components
import MidSection from "./MidSection";
import NavBar from "./NavBar";
import Slide from "./Slide";

import { getProducts as listProducts } from "../../redux/actions/productActions";
import MidSlide from "./MidSlide";

// import { products } from '../../constants/data';

const useStyles = makeStyles(theme => ({
    component: {
        padding: 10,
        background: '#f2f2f2'
    }
}))

const Home = () => {
    const classes = useStyles();

    const { products } = useSelector(state => state.getProducts)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide timer={false} title="Discounts for you" products={products} />
                <Slide timer={false} title="Suggested items" products={products} />
                <Slide timer={false} title="Top Selection" products={products} />
                <Slide timer={false} title="Recommended Items" products={products} />
                <Slide timer={false} title="Bestsellers" products={products} />
            </Box>
        </div>
    );
}

export default Home;
