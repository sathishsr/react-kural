import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useKuralListStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            maxWidth: 360,
            backgroundColor: "#282c34",
            position: "relative",
            display: 'flex',
            flexDirection: 'column',

        },
        listSection: {
            backgroundColor: "inherit",
        },
        ul: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: "inherit",
            padding: 0,
        },
        listSubHeaderRoot: {
            backgroundColor: "#282c34",
            color: "#252525",
            /* To change the font, use the fontFamily rule */
        },
        listPage: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignContent: 'start',
            alignItems: 'start',
            padding: 24,

        }
    })
);