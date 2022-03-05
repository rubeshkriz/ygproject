import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import SiTable from '../Table/SiTable'
import Footer from '../Footer/Footer'


function SiContent(props) {
  
  return (
    <div className="container">
        {/* <!-- Main content --> */}

		<div className="content-wrapper">
            <PageHeader title="Sales Invoice"/>
            <SiTable titles={props.heading} />            
            <Footer />
        </div>
        
		 {/* <!-- /main content --> */}
    </div>
  )
}

export default SiContent