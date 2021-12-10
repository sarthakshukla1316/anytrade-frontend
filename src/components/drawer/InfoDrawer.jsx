import { Box, Drawer, makeStyles, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import ProfileDrawer from './ProfileDrawer';

const useStyles = makeStyles({
    header: {
        background: '#2874f0',
        height: 97,
        color: '#fff',
        display: 'flex',
        '& > *': {
            marginTop: 'auto',
            padding: 15,
            fontWeight: 600
        }
    },
    component: {
        background: '#ededed',
        height: '88%'
    },
    icon: {
        color: '#000',
        zIndex: 999
    }
})

const InfoDrawer = ({ open, setOpen}) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Drawer open={open} onClose={handleClose}>
            <Box className={classes.header}>
                <ArrowBack className={classes.icon} onClick={() => handleClose()} />
                <Typography>Profile</Typography>
            </Box>
            
            <Box className={classes.component}>
                <ProfileDrawer />
            </Box>
        </Drawer>
    )
}

export default InfoDrawer;