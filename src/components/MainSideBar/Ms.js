import React from 'react'
import { Link } from "react-router-dom";

function MainNavBar() {
  return (
    <div> {/* <!-- Main navbar --> */}
	<div className="navbar navbar-expand-md navbar-dark ">
		<div className="navbar-brand">
			<span className="BrandName">YG cutting and tools</span>
			<Link to="#" className="d-inline-block">
				<img src="../../public/global_assets/images/logo_light.png" alt=""/>
			</Link>
		</div>

		<div className="d-md-none">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
				<i className="icon-tree5"></i>
			</button>
			<button className="navbar-toggler sidebar-mobile-main-toggle" type="button">
				<i className="icon-paragraph-justify3"></i>
			</button>
		</div>

		<div className="collapse navbar-collapse" id="navbar-mobile">
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="#" className="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
						<i className="icon-paragraph-justify3"></i>
					</Link>
				</li>
			</ul>

			<span className="badge bg-success ml-md-3 mr-md-auto">Online</span>

			<ul className="navbar-nav">
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

				{/* <li className="nav-item dropdown">
					<Link to="#" className="navbar-nav-link dropdown-toggle caret-0" data-toggle="dropdown">
						<i className="icon-bubbles4"></i>
						<span className="d-md-none ml-2">Messages</span>
						<span className="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span>
					</Link>
					
					<div className="dropdown-menu dropdown-menu-right dropdown-content wmin-md-350">
						<div className="dropdown-content-header">
							<span className="font-weight-semibold">Messages</span>
							<Link to="#" className="text-default"><i className="icon-compose"></i></Link>
						</div>

						<div className="dropdown-content-body dropdown-scrollable">
							<ul className="media-list">
								<li className="media">
									<div className="mr-3 position-relative">
										<img src="../../../../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" className="rounded-circle" alt=""/>
									</div>

									<div className="media-body">
										<div className="media-title">
											<Link to="#">
												<span className="font-weight-semibold">James Alexander</span>
												<span className="text-muted float-right font-size-sm">04:58</span>
											</Link>
										</div>

										<span className="text-muted">who knows, maybe that would be the best thing for me...</span>
									</div>
								</li>

								<li className="media">
									<div className="mr-3 position-relative">
										<img src="../../../../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" className="rounded-circle" alt=""/>
									</div>

									<div className="media-body">
										<div className="media-title">
											<Link to="#">
												<span className="font-weight-semibold">Margo Baker</span>
												<span className="text-muted float-right font-size-sm">12:16</span>
											</Link>
										</div>

										<span className="text-muted">That was something he was unable to do because...</span>
									</div>
								</li>

								<li className="media">
									<div className="mr-3">
										<img src="../../../../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" className="rounded-circle" alt=""/>
									</div>
									<div className="media-body">
										<div className="media-title">
											<Link to="#">
												<span className="font-weight-semibold">Jeremy Victorino</span>
												<span className="text-muted float-right font-size-sm">22:48</span>
											</Link>
										</div>

										<span className="text-muted">But that would be extremely strained and suspicious...</span>
									</div>
								</li>

								<li className="media">
									<div className="mr-3">
										<img src="../../../../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" className="rounded-circle" alt=""/>
									</div>
									<div className="media-body">
										<div className="media-title">
											<Link to="#">
												<span className="font-weight-semibold">Beatrix Diaz</span>
												<span className="text-muted float-right font-size-sm">Tue</span>
											</Link>
										</div>

										<span className="text-muted">What a strenuous career it is that I've chosen...</span>
									</div>
								</li>

								<li className="media">
									<div className="mr-3">
										<img src="../../../../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" className="rounded-circle" alt=""/>
									</div>
									<div className="media-body">
										<div className="media-title">
											<Link to="#">
												<span className="font-weight-semibold">Richard Vango</span>
												<span className="text-muted float-right font-size-sm">Mon</span>
											</Link>
										</div>
										
										<span className="text-muted">Other travelling salesmen live a life of luxury...</span>
									</div>
								</li>
							</ul>
						</div>

						<div className="dropdown-content-footer justify-content-center p-0">
							<Link to="#" className="bg-light text-grey w-100 py-2" data-popup="tooltip" title="Load more"><i className="icon-menu7 d-block top-0"></i></Link>
						</div>
					</div>
				</li> */}

				<li className="nav-item dropdown dropdown-user">
					<Link to="#" className="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">
						<span>User name</span>
					</Link>

					<div className="dropdown-menu dropdown-menu-right">
						<Link to="#" className="dropdown-item"><i className="icon-user-plus"></i> My profile</Link>
						<div className="dropdown-divider"></div>
						<Link to="#" className="dropdown-item"><i className="icon-switch2"></i> Logout</Link>
					</div>
				</li>
			</ul>
		</div>
	</div>
	{/* <!-- /main navbar --> */}
    </div>
  )
}

export default MainNavBar