import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import Footer from '../Footer/Footer'
import ADRForm from '../Form/ADRForm'




function ADRContent(props) {
  
  return (
    <div className="container">
        {/* <!-- Main content --> */}

		<div className="content-wrapper">
            <PageHeader title="ADR"/>
            <ADRForm />
            <Footer />
        </div>
        
		 {/* <!-- /main content --> */}
    </div>
  )
}

export default ADRContent