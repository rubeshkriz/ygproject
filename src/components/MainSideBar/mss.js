import React from 'react'
import { Link } from "react-router-dom";
import { Receipt, CardChecklist, FileEarmarkFill, PersonBadgeFill, Folder2Open, Shop, BookmarkCheckFill, BookmarksFill,
BagFill, Upc, Box, PersonBadge, BarChartSteps, ClipboardData, RecordCircle, Journals, StickyFill } from 'react-bootstrap-icons';


function MainSideBar() {
  return (
    <div id="sidebar">
        {/* <!-- Main sidebar --> */}
		<div className="sidebar sidebar-dark sidebar-main sidebar-expand-md">
			{/* <!-- Sidebar mobile toggler --> */}
			<div className="sidebar-mobile-toggler text-center">
				<Link to="#" className="sidebar-mobile-main-toggle">
					<i className="icon-arrow-right8"></i>
				</Link>
				Navigation
				<Link to="#" className="sidebar-mobile-expand">
					<i className="icon-screen-full"></i>
					<i className="icon-screen-normal"></i>
				</Link>
			</div>
			{/* <!-- /sidebar mobile toggler --> */}


			{/* <!-- Sidebar content --> */}
			<div className="sidebar-content">

				{/* <!-- User menu --> */}
				{/* <div className="sidebar-user">
					<div className="card-body">
						<div className="media">		
							<div className="ml-3 align-self-center">
								<Link to="#" className="text-white"><i className="icon-cog3"></i></Link>
							</div>
						</div>
					</div>
				</div> */}
				{/* <!-- /user menu --> */}


				{/* <!-- Main navigation --> */}
				<div className="card card-sidebar-mobile">
					<ul className="nav nav-sidebar" data-nav-type="accordion">

                    <li className="nav-item">
								<Link to="/" className="nav-link active">
									<i className="icon-home4"></i>
									<span>
										Dashboard
										<span className="d-block font-weight-normal opacity-50">No active orders</span>
									</span>
								</Link>
							</li>

						{/* <!-- Main --> */}
						{/* <li className="nav-item-header"><div className="text-uppercase font-size-xs line-height-xs">Main</div> <i className="icon-menu" title="Main"></i></li> */}
						<li className="nav-item">
							<Link to="/" className="nav-link">
							<CardChecklist size={20} className="oIcons" />
								<span>
									Sales Quotation
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/saleOrder" className="nav-link">
							<Receipt size={20} className="oIcons" />
								<span>
									Sale Order
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/SalesInvoice" className="nav-link">
							<FileEarmarkFill size={20} className="oIcons" />
								<span>
									Sales Invoice
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/CustomerOutstanding" className="nav-link">
							<PersonBadgeFill size={20} className="oIcons" />
								<span>
									Customer Outstanding
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/PenaltyDetails" className="nav-link">
							<Folder2Open size={20} className="oIcons" />
								<span>
									Penalty Details
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/StockReport" className="nav-link">
							<Shop size={20} className="oIcons" />
								<span>
									Stock Report
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/BackLogReport" className="nav-link">
							<BookmarkCheckFill size={20} className="oIcons" />
								<span>
									Backlog Report
								</span>
							</Link>
						</li>
						<li class="nav-item-divider"></li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
							<BookmarksFill size={20} className="oIcons" />
							
								<span>
									ADR
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
							<BagFill size={20} className="oIcons" />

								<span>
									Purchase Order
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
							<Upc size={20} className="oIcons" />							
								<span>
									Packing Slip
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
							<Box size={20} className="oIcons" />
								<span>
									Courier Details
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
							<PersonBadge size={20} className="oIcons" />
							
								<span>
									Customer Complaint Aproval
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
							<BarChartSteps size={20} className="oIcons" />							
								<span>
									DTA
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
							<ClipboardData size={20} className="oIcons" />							
								<span>
									Promotion Details
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
							<RecordCircle size={20} className="oIcons" />							
								<span>
									SSR Records
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
							<Journals size={20} className="oIcons" />
								<span>
									Credit Note
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
							<StickyFill size={20} className="oIcons" />
								<span>
									TA and DA
								</span>
							</Link>
						</li>
						
						
					</ul>
				</div>
				{/* <!-- /main navigation --> */}

			</div>
			{/* <!-- /sidebar content --> */}
			
		</div>
		{/* <!-- /main sidebar --> */}
    </div>
  )
}

export default MainSideBar