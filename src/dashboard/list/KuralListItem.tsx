import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Kural } from '../../types/Kural';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            [theme.breakpoints.down('xs')]: {
                maxWidth: 400,
            },
            [theme.breakpoints.up('sm')]: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: 240,
                maxWidth: 700,
            },
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
            padding: 0,
            margin: 0,
        },
        headerContent: {
            display: 'flex',
            flexDirection: 'column'

        },

    }),
);


interface Props {
    data: Kural
}

export const KuralListItem = (props: Props) => {
    const { data } = props
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const title = () => {
        return (<div className={classes.headerContent}>
            <Typography variant="body2" color="textPrimary" noWrap >
                {data.Line1.trim()}
            </Typography>
            <Typography variant="body2" color="textPrimary" noWrap>
                {data.Line2.trim()}
            </Typography>
        </div>
        )
    }

    return (
        <Card className={classes.root} onClick={handleExpandClick}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {data.Line1.charAt(0)}
                    </Avatar>
                }

                title={title()}
            />

            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {data.mv}
                </Typography>
            </CardContent>
            {/* <CardActions >
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions> */}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph variant="body2" color="textPrimary">
                        MK: {data.mk}
                    </Typography>
                    <Typography paragraph variant="body2" color="textPrimary">
                        SP: {data.sp}
                    </Typography>
                    <Typography paragraph variant="body2" color="textPrimary">
                        {data.Translation}
                    </Typography>
                    <Typography paragraph variant="body2" color="textPrimary">
                        {data.explanation}
                    </Typography>
                    <Typography paragraph variant="body2" color="textPrimary">
                        {data.couplet}
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    );
}
export default KuralListItem