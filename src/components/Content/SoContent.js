import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
// import Table from '../Table/Table'
import SoTable from '../Table/SoTable'
import Footer from '../Footer/Footer'



function SoContent(props) {
  
  return (
    <div className="container">
        {/* <!-- Main content --> */}

		<div className="content-wrapper">
            <PageHeader title="Sale Order"/>
            <SoTable titles={props.heading} />            
            <Footer />
        </div>
        
		 {/* <!-- /main content --> */}
    </div>
  )
}

export default SoContent