import React, { useEffect, useState } from 'react'
import { AppContext } from '../context/context';
import logo from '../logo.svg';
import { ChaptersDetail } from '../types/Details';
import { kuralList } from '../Util/MenuDrawerDataHelper';
import KuralList from './list/KuralList';
import { usePagination } from './usePagination';

const KuralDashboard = () => {
    const { state } = React.useContext(AppContext);
    const [page, setPage] = useState<ChaptersDetail>()
    const totalPage = state?.products?.sectionDetail?.chapters?.detail?.length

    const { paginationView, selectedPage } = usePagination({ count: totalPage })

    useEffect(() => {
        const pageNumber = state?.products?.sectionDetail?.chapters?.detail[selectedPage - 1]
        setPage(pageNumber)
    }, [selectedPage])

    if (page) {
        return (
            <div>
                <header className="App-header">
                    <KuralList start={page.start} end={page.end} />
                    {paginationView}
                </header>

            </div>
        )
    } else {
        return null
    }
}

export default KuralDashboard
