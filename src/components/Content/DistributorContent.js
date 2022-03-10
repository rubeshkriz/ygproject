import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
// import Table from '../Table/Table'
import DistributorTable from '../Table/DistributorTable'
import Footer from '../Footer/Footer'




function DistributorContent(props) {
  
  return (
    <div className="container">
        {/* <!-- Main content --> */}

		<div className="content-wrapper">
            <PageHeader title="Distributor Target VS Actual"/>
            <DistributorTable titles={props.heading} />
            
            <Footer />
        </div>
        
		 {/* <!-- /main content --> */}
    </div>
  )
}

export default DistributorContent