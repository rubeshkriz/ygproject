import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import BrTable from '../Table/BrTable'
import Footer from '../Footer/Footer'


function BrContent(props) {
  
  return (
    <div className="container">

		<div className="content-wrapper">
            <PageHeader title="Backlog Report"/>
            <BrTable titles={props.heading} />            
            <Footer />
        </div>
        
    </div>
  )
}

export default BrContent