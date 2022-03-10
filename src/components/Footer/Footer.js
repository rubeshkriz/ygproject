import React from 'react'
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div>
        			{/* <!-- Footer --> */}
			<div className="navbar navbar-expand-lg navbar-light">
				<div className="navbar-collapse collapse " id="navbar-footer">
					<span id="footer" className="navbar-text">
						&copy; 2022 Developed By: <Link id="Indus" to="#">Indus Novature</Link>
					</span>					
				</div>
			</div>
			{/* <!-- /footer --> */}
    </div>
  )
}

export default Footer