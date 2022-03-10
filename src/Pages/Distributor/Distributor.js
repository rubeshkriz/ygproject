import React from 'react'
import MainNavBar from '../../components/MainNavBar/MainNavBar'
import MainSideBar from '../../components/MainSideBar/MainSideBar'
import DistributorContent from '../../components/Content/DistributorContent'

function Distributor() {
    return (
        <div>
            <MainNavBar />

            <div className="page-content">
                <MainSideBar />
                <DistributorContent heading={['Total','AB','Insert','Gp']} table="Home" />
            </div>
        </div>
    )
}

export default Distributor