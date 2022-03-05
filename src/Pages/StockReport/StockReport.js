import React from 'react'
import MainNavBar from '../../components/MainNavBar/MainNavBar'
import MainSideBar from '../../components/MainSideBar/MainSideBar'
import SrContent from '../../components/Content/SrContent'

function StockReport() {
    return (
        <div>
            <MainNavBar />

            <div className="page-content">
                <MainSideBar />
                <SrContent heading={['Doc-Num', 'Item-Code', 'Item-Name','Item-Category', 'Whs-Code','List-Price']} table="Home" />
            </div>
        </div>
    )
}

export default StockReport