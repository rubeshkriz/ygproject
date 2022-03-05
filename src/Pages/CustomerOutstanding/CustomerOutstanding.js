import React from 'react'
import MainNavBar from '../../components/MainNavBar/MainNavBar'
import MainSideBar from '../../components/MainSideBar/MainSideBar'
import CoContent from '../../components/Content/CoContent'

function CustomerOutstanding() {
    return (
        <div>
            <MainNavBar />

            <div className="page-content">
                <MainSideBar />
                <CoContent heading={['Doc-Num', 'customer-Name', 'Balance-Amount']} table="Home" />
            </div>
        </div>
    )
}

export default CustomerOutstanding