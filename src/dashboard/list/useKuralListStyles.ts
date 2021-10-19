import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useKuralListStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            overflow: 'hidden',


        },
        ul: {
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
        },
        listSubHeaderRoot: {
            color: "#252525",
            /* To change the font, use the fontFamily rule */
        },
        listPage: {
            width: 100,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignContent: 'start',
            alignItems: 'start',
            padding: 24,

        }
    })
);