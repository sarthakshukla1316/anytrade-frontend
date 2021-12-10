import { makeStyles, InputBase, List, ListItem } from "@material-ui/core";
import { Search } from '@material-ui/icons';

import { useEffect, useState } from "react";
import { getProducts as listProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    search: {
        borderRadius: 2,
        backgroundColor: '#fff',
        marginLeft: 10,
        width: '38%',
        display: 'flex',
        color: '#000'
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        color: 'blue'
      },
      inputRoot: {
        width: '100%',
        fontSize: 'unset'
      },
      inputInput: {
        paddingLeft: 20,
      },
      list: {
        position: 'absolute',
        color: '#000',
        background: '#fff',
        marginTop: 36
      },
      link: {
        textDecoration: 'none',
        color: 'inherit'
      }
}))

const SearchBar = () => {
    const classes = useStyles();
    const [text, setText] = useState('');
    const [open, setOpen] = useState(true);

    const getText = (text) => {
      setText(text);
      setOpen(false);
    }

    const { products } = useSelector(state => state.getProducts)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div className={classes.search}>
            <InputBase
              placeholder="Search for products, brands and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => getText(e.target.value)}
            />
            <div className={classes.searchIcon}>
              <Search />
            </div>
            {
              text && 
                <List className={classes.list} hidden={open}>
                  {
                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                      <ListItem>
                        <Link 
                          to={`/product/${product.id}`} className={classes.link}
                          onClick={() => setOpen(true)}
                        >
                          {product.title.longTitle}
                        </Link>
                      </ListItem> 
                    ))
                  }
                </List>
            }
        </div>
    );
}

export default SearchBar;
