import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import Footer from '../Footer/Footer'
import CustomerComplaintForm from '../Form/CustomerComplaintForm'

function CustomerComplaintContent(props) {
  
  return (
    <div className="container">
        {/* <!-- Main content --> */}

		<div className="content-wrapper">
            <PageHeader title="Customer Complaint"/>
            <CustomerComplaintForm />
            <Footer />
        </div>
        
		 {/* <!-- /main content --> */}
    </div>
  )
}

export default CustomerComplaintContent