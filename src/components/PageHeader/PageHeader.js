import React from 'react'
import { Link } from "react-router-dom";


function PageHeader(props) {
  return (
    <div>
        {/* <!-- Page header --> */}
			<div className="page-header page-header-light mt-3 mb-3">
				<div className="page-header-content header-elements-md-inline">
					<div className="page-title d-flex">
						<h4><i className="icon-arrow-right6 mr-2"></i> <span className="font-weight-semibold">{props.title}</span> - Dashboard</h4>
						<Link to="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more"></i></Link>
					</div>

					
				</div>

				
			</div>
			{/* <!-- /page header --> */}
    </div>
  )
}

export default PageHeader