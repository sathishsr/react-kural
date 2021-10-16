import { List, ListSubheader, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { kuralList } from '../../Util/MenuDrawerDataHelper';
import KuralListItem from './KuralListItem';
import { useKuralListStyles } from './useKuralListStyles';

interface Props {
    start: number
    end: number
}

const KuralList = (props: Props) => {
    const { start, end } = props
    const classes = useKuralListStyles();
    return (
        <List className={classes.root}>
            {kuralList(start, end).map((data) => (
                <ListItem
                    key={`item-${data?.Number}`}
                    button
                    onClick={() => {

                    }}
                >
                    <KuralListItem data={data} />
                </ListItem>


            ))}
        </List>
    )
}

export default KuralList
