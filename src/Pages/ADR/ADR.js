import React from 'react'
import MainNavBar from '../../components/MainNavBar/MainNavBar'
import MainSideBar from '../../components/MainSideBar/MainSideBar'
import ADRContent from '../../components/Content/ADRContent'

function ADR() {
    return (
        <div>
            <MainNavBar />

            <div className="page-content">
                <MainSideBar />
                <ADRContent/>
            </div>
        </div>
    )
}

export default ADR