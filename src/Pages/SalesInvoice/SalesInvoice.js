import React from 'react'
import MainNavBar from '../../components/MainNavBar/MainNavBar'
import MainSideBar from '../../components/MainSideBar/MainSideBar'
import SiContent from '../../components/Content/SiContent'

function SalesInvoice() {
    return (
        <div>
            <MainNavBar />

            <div className="page-content">
                <MainSideBar />
                <SiContent heading={['Doc-Num', 'Doc-Date', 'customer-Name', 'Invoice-Total']} table="Home" />
            </div>
        </div>
    )
}

export default SalesInvoice