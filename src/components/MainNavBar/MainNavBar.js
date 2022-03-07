import React,{useEffect} from 'react'
import { NavLink } from 'react-bootstrap';
import { Link } from "react-router-dom";
import $ from "jquery";
import Cookies from 'js-cookie'

const MainNavBar = () => {
	useEffect(() => {
		$('#point').click(function(){
			$('body').toggleClass('sidebar-xs');
			// $('body').addClass('sidebar-xs sidebar-mobile-main');
			// $('body').toogleClass('sidebar-mobile-main');
		});
		$('#pointMobile').click(function(){
			$('body').toggleClass('sidebar-mobile-main');
			// $('body').addClass('sidebar-xs sidebar-mobile-main');
			// $('body').toogleClass('sidebar-mobile-main');
		});
	},[]);

	const Logout = () => {
		Cookies.remove("empID");
		Cookies.remove("id");
		Cookies.remove("token");
	}
  return(
	  // <!-- Main navbar -->
	<div className="navbar navbar-expand-md navbar-dark">
	<div className="navbar-brand">
			<span className="BrandName">YG cutting and tools</span>
			<Link to="/" className="d-inline-block">
			</Link>
		</div>

	<div className="d-md-none">
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
			<i className="icon-tree5"></i>
		</button>
		<button id="pointMobile" className="navbar-toggler sidebar-mobile-main-toggle" type="button">
			<i className="icon-paragraph-justify3"></i>
		</button>
	</div>

	<div className="collapse navbar-collapse" id="navbar-mobile">
		<ul className="navbar-nav">
			<li className="nav-item">
				{/* <a href="#" className="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
					<i className="icon-paragraph-justify3"></i>
				</a> */}
				<Link to="#" id="point" className="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
					<i className="icon-paragraph-justify3"></i>
				</Link>
			</li>

			<li className="nav-item dropdown">
					<Link to="#" className="navbar-nav-link dropdown-toggle caret-0" data-toggle="dropdown">
						<i className="icon-people"></i>
						<span className="d-md-none ml-2">Users</span>
					</Link>


					
					<div className="dropdown-menu dropdown-menu-right dropdown-content wmin-md-300">
						<div className="dropdown-content-header">
							<span className="font-weight-semibold">Users online</span>
							<Link to="#" className="text-default"><i className="icon-search4 font-size-base"></i></Link>
						</div>

						<div className="dropdown-content-footer bg-light">
							<Link to="#" className="text-grey mr-auto">All users</Link>
							<Link to="#" className="text-grey"><i className="icon-gear"></i></Link>
						</div>
					</div>
				</li>

				
				<li className="nav-item dropdown dropdown-user">
					<Link to="#" className="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">
						<span>User name</span>
					</Link>

					<div className="dropdown-menu dropdown-menu-right">
						<Link to="#" className="dropdown-item"><i className="icon-user-plus"></i> My profile</Link>
						<div className="dropdown-divider"></div>
						<Link to="/Login" onClick={Logout} className="dropdown-item"><i className="icon-switch2"></i> Logout</Link>
					</div>
				</li>

		</ul>
	</div>
</div>
// {/* <!-- /main navbar --> */}
  );
    
  
}

export default MainNavBar