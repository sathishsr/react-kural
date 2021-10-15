import { List, ListSubheader, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { kuralList } from '../../Util/MenuDrawerDataHelper';
import { useKuralListStyles } from './useKuralListStyles';

interface Props {
    start: number
    end: number
}

const KuralList = (props: Props) => {
    const { start, end } = props
    const classes = useKuralListStyles();
    return (
        <List className={classes.listPage} subheader={<li />}>
            {kuralList(start, end).map((data) => (
                <li key={`section-${data?.Number}`} className={classes.listSection}>
                    <ul>
                        <ListItem
                            className={classes.listPage}
                            key={`item-${data?.Number}`}
                            button
                            onClick={() => {

                            }}
                        >
                            <ListItemText primary={data?.Line1} />
                            <ListItemText primary={data?.Line2} />
                        </ListItem>

                    </ul>
                </li>
            ))}
        </List>
    )
}

export default KuralList
