import React from 'react'
import MainNavBar from '../../components/MainNavBar/MainNavBar'
import MainSideBar from '../../components/MainSideBar/MainSideBar'
import Content from '../../components/Content/Content'

function SalesQuotation() {
  return (
    <div>
       <MainNavBar />

       <div className="page-content">
       <MainSideBar />
       <Content heading={['DocNum','DocDate','customer-Name','End-Customername']} table="Home"/>
       </div>
    </div>
  )
}

export default SalesQuotation