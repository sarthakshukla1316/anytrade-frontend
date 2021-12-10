import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from './components/cart/Cart';
import Wishlist from './components/wishlist/Wishlist';
import AllProducts from './components/allProducts/AllProducts';
import { TemplateProvider } from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import DetailView from './components/product/DetailView';
import Categories from './components/category/Categories';
import { Box } from '@material-ui/core';


function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop: 54}}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/wishlist' component={Wishlist} />
              <Route exact path='/all' component={AllProducts} />
              <Route exact path='/product/:id' component={DetailView} />
              <Route exact path='/product/category/:category' component={Categories} />
            </Switch>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
