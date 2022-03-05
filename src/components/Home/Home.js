import React from 'react'
import MainNavBar from '../MainNavBar/MainNavBar'
import MainSideBar from '../MainSideBar/MainSideBar'
import Content from '../Content/Content'




function Home() {
  
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

export default Home