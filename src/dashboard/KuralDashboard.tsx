import React, { useEffect, useState } from 'react'
import { AppContext } from '../context/context';
import { ChaptersDetail } from '../types/Details';
import KuralList from './list/KuralList';
import { usePagination } from './usePagination';

const KuralDashboard = () => {
    const { state } = React.useContext(AppContext);
    const [pageDetails, setPageDetails] = useState<ChaptersDetail>()
    const totalPage = state?.products?.sectionDetail?.chapters?.detail?.length

    const { paginationView, selectedPage } = usePagination({ count: totalPage })

    useEffect(() => {
        const pageDetails = state?.products?.sectionDetail?.chapters?.detail[selectedPage - 1]
        setPageDetails(pageDetails)
    }, [state, selectedPage])

    if (pageDetails) {
        return (
            <div>
                <header className="App-header">
                    {paginationView}
                    <KuralList start={pageDetails.start} end={pageDetails.end} />
                </header>

            </div>
        )
    } else {
        return null
    }
}

export default KuralDashboard
