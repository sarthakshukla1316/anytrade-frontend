import { Box, makeStyles, Typography } from "@material-ui/core"
import { useContext } from "react";
import { LoginContext } from "../../context/ContextProvider";

const useStyles = makeStyles({
    imageContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    displayPicture: {
        width: 200,
        height: 200,
        borderRadius: '50%',
        padding: '18px 0'
    },
    nameContainer: {
        background: '#fff',
        padding: '12px 30px 2px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        '& :first-child': {
            fontSize: 14,
            color: '#009688'
        },
        '& :last-child': {
            color: '#4a4a4a',
            margin: '14px 0'
        }
    },
    description: {
        padding: '10px 20px 28px 30px',
        '& > *': {
            fontSize: 12,
            color: 'rgba(0, 0, 0, 0.45)'
        }
    }
})

const ProfileDrawer = () => {
    const classes = useStyles();

    const { user } = useContext(LoginContext);

    return (
        <>
            <Box className={classes.imageContainer}>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="DP" className={classes.displayPicture} />
            </Box>

            <Box className={classes.nameContainer}>
                <Typography>Your UserName</Typography>
                <Typography>{user.username}</Typography>
            </Box>

            <Box className={classes.description}>
                <Typography>This is not your username or pin. This name will be visible to your whatsapp contacts.</Typography>
            </Box>

            <Box className={classes.nameContainer}>
                <Typography>About</Typography>
                <Typography>Can't talk, Purchase only</Typography>
            </Box>
        </>
    )
}

export default ProfileDrawer;
