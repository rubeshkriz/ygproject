import React from 'react'
import MainNavBar from '../../components/MainNavBar/MainNavBar'
import MainSideBar from '../../components/MainSideBar/MainSideBar'
import SoContent from '../../components/Content/SoContent'

function SaleOrder() {
    return (
        <div>
            <MainNavBar />

            <div className="page-content">
                <MainSideBar />
                <SoContent heading={['DocNum', 'DocDate', 'customer-Name','End-Customer','DocTotal','DocStatus']} table="Home" />
            </div>
        </div>
    )
}

export default SaleOrder