import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import SrTable from '../Table/SrTable'
import Footer from '../Footer/Footer'


function SrContent(props) {
  
  return (
    <div className="container">
        {/* <!-- Main content --> */}

		<div className="content-wrapper">
            <PageHeader title="Stock Report"/>
            <SrTable titles={props.heading} />            
            <Footer />
        </div>
        
		 {/* <!-- /main content --> */}
    </div>
  )
}

export default SrContent