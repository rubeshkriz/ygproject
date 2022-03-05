import React from 'react'
import MainNavBar from '../../components/MainNavBar/MainNavBar'
import MainSideBar from '../../components/MainSideBar/MainSideBar'
import PdContent from '../../components/Content/PdContent'

function PenaltyDetails() {
    return (
        <div>
            <MainNavBar />

            <div className="page-content">
                <MainSideBar />
                <PdContent heading={['Doc-Num','Doc-Date','Penalty-Amont','Penalty-Tax','Penalty-Total','Penalty-Reason','Paid-Status',]} table="Home" />
            </div>
        </div>
    )
}

export default PenaltyDetails