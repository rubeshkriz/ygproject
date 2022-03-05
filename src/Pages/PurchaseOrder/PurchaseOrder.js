import React from 'react'
import MainNavBar from '../../components/MainNavBar/MainNavBar'
import MainSideBar from '../../components/MainSideBar/MainSideBar'
import PoContent from '../../components/Content/PoContent'

function PurchaseOrder() {
    return (
        <div>
            <MainNavBar />

            <div className="page-content">
                <MainSideBar />
                <PoContent/>
            </div>
        </div>
    )
}

export default PurchaseOrder