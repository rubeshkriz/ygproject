import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
// import Table from '../Table/Table'
import CdTable from '../Table/CdTable'
import Footer from '../Footer/Footer'


function CdContent(props) {
  
  return (
    <div className="container">
        {/* <!-- Main content --> */}

		<div className="content-wrapper">
            <PageHeader title="Courier Details"/>
            <CdTable titles={props.heading} />            
            <Footer />
        </div>
        
		 {/* <!-- /main content --> */}
    </div>
  )
}

export default CdContent