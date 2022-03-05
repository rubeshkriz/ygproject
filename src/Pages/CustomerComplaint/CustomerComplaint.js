import React from 'react'
import MainNavBar from '../../components/MainNavBar/MainNavBar'
import MainSideBar from '../../components/MainSideBar/MainSideBar'
import CustomerComplaintContent from '../../components/Content/CustomerComplaintContent'

function CustomerComplaint() {
    return (
        <div>
            <MainNavBar />

            <div className="page-content">
                <MainSideBar />
                <CustomerComplaintContent/>
            </div>
        </div>
    )
}

export default CustomerComplaint