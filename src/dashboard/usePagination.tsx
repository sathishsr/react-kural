import Paper from '@material-ui/core/Paper/Paper';
import Pagination from '@material-ui/lab/Pagination';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { usePaginationStyles } from './usePaginationStyles';

interface IPaginationProps {
    count: number | undefined,
}
export const usePagination = (props: IPaginationProps): { paginationView: React.ReactElement, selectedPage: number } => {
    const { count } = props
    const [selectedPage, setSelectedPage] = useState<number>(1)
    const classes = usePaginationStyles()

    // Reset selectedPage count when screen refreshes
    useEffect(() => {
        setSelectedPage(1)
    }, [count])

    const onChange = useCallback(
        (event, page: number) => {
            setSelectedPage(page)
            console.log('SELECTED_PAGE:::', selectedPage)
        },
        [count],
    )
    console.log('SELECTED_PAGE OUT:::', selectedPage)
    const paginationView = useMemo(() => renderPaginationView(count, onChange, classes, selectedPage), [count, selectedPage])
    return { paginationView, selectedPage }
}

const renderPaginationView = (count: number | undefined, onChange: (event: React.ChangeEvent<unknown>, page: number) => void, classes: any, page: number) => {
    return (<div className={classes.root}> <Paper variant="outlined"><Pagination count={count} page={page} onChange={onChange} size="large" shape="rounded" /></Paper>
    </div>)
}