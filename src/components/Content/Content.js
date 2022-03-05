import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
// import Table from '../Table/Table'
import Table from '../Table/Table'
import Footer from '../Footer/Footer'
import SQDetailTable from '../../components/DetailTable/SQDetailTable'




function Content(props) {
  
  return (
    <div className="container">
        {/* <!-- Main content --> */}

		<div className="content-wrapper">
            <PageHeader title="Sales Quotation"/>
            <Table titles={props.heading} />
            
            <Footer />
        </div>
        
		 {/* <!-- /main content --> */}
    </div>
  )
}

export default Content