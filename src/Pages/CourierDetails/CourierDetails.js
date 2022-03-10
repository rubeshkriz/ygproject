import React from 'react'
import MainNavBar from '../../components/MainNavBar/MainNavBar'
import MainSideBar from '../../components/MainSideBar/MainSideBar'
import CdContent from '../../components/Content/CdContent'

function CourierDetails() {
    return (
        <div>
            <MainNavBar />

            <div className="page-content">
                <MainSideBar />
                <CdContent heading={['Voucer Number','VoucherDate','Customer ID','Bill To Customer','Item ID','Customer PO','Sale Order Number','Item Short Description','Quantity','Docket NO','Courier Name','Way Bill No','Remarks']} table="Home" />
            </div>
        </div>
    )
}

export default CourierDetails