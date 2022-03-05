import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import Footer from '../Footer/Footer'
import PoForm from '../Form/PoForm'




function PoContent(props) {
  
  return (
    <div className="container">
        {/* <!-- Main content --> */}

		<div className="content-wrapper">
            <PageHeader title="Purchase Order"/>
            <PoForm />
            <Footer />
        </div>
        
		 {/* <!-- /main content --> */}
    </div>
  )
}

export default PoContent