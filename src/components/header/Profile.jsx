import { Typography, Menu, MenuItem, makeStyles } from "@material-ui/core";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { KeyboardArrowDown } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StoreIcon from '@material-ui/icons/Store';
import HelpIcon from '@material-ui/icons/Help';
import BuildIcon from '@material-ui/icons/Build';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InfoIcon from '@material-ui/icons/Info';
import { useState } from "react";
import { Link } from "react-router-dom";
import InfoDrawer from "../drawer/InfoDrawer";

const useStyles = makeStyles({
    component: {
        marginTop: 40
    },
    logout: {
        marginLeft: 20,
        fontSize: 14
    },
    link: {
        textDecoration: 'none',
        color: "inherit"
    }
})

const Profile = ({ account, setAccount }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClickDrawer = () => {
        setOpenDrawer(true);
        handleClose();
    }

    const logout = () => {
        setAccount('');
    }

  return (
    <>
    <Link style={{display: 'flex'}}>
      <Typography onClick={handleClick} style={{ marginTop: 2 }}>{account}</Typography><KeyboardArrowDown />
    </Link>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem onClick={() => handleClickDrawer()}>
            <AccountCircleIcon fontSize="small" color="primary" />
            <Typography className={classes.logout}>Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <StoreIcon fontSize="small" color="primary" />
            <Typography className={classes.logout}>My Orders</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to='/wishlist' className={classes.link} style={{display: 'flex'}}>
                <BookmarkIcon fontSize="small" color="primary" />
                <Typography className={classes.logout}>My Wishlist</Typography>
            </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <NotificationsIcon fontSize="small" color="primary" />
            <Typography className={classes.logout}>Notifications</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <InfoIcon fontSize="small" color="primary" />
            <Typography className={classes.logout}>Information</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <HelpIcon fontSize="small" color="error" />
            <Typography className={classes.logout}>Help Center</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <BuildIcon fontSize="small" color="primary" />
            <Typography className={classes.logout}>Settings</Typography>
        </MenuItem>
        <MenuItem onClick={() => { handleClose(); logout();}}>
            <PowerSettingsNewIcon fontSize="small" color="secondary" />
            <Typography className={classes.logout}>Logout</Typography>
        </MenuItem>
      </Menu>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Profile;
