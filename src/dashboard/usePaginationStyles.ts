import { makeStyles } from "@material-ui/core";

export const usePaginationStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: 240,
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 24,
    },
}));

