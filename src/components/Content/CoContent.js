import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
// import Table from '../Table/Table'
import CoTable from '../Table/CoTable'
import Footer from '../Footer/Footer'


function CoContent(props) {
  
  return (
    <div className="container">
        {/* <!-- Main content --> */}

		<div className="content-wrapper">
            <PageHeader title="Customer Outsanding"/>
            <CoTable titles={props.heading} />            
            <Footer />
        </div>
        
		 {/* <!-- /main content --> */}
    </div>
  )
}

export default CoContent