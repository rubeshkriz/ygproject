import React,{useEffect} from 'react'
import $ from "jquery";

import { Link } from "react-router-dom";
import { Receipt, CardChecklist, FileEarmarkFill, PersonBadgeFill, Folder2Open, Shop, BookmarkCheckFill, BookmarksFill,
BagFill, Upc, Box, PersonBadge, BarChartSteps, ClipboardData, RecordCircle, Journals, StickyFill } from 'react-bootstrap-icons';


function MainSideBar() {
	useEffect(() => {
		$('#point2').click(function(){
			$('body').removeClass('sidebar-mobile-main');
			$('body').removeClass('sidebar-xs');
		});
	},[]);
  return (
    // <!-- Main sidebar -->
		<div id="fixSideBar" className="sidebar sidebar-light sidebar-main sidebar-expand-md align-self-start">

			{/* <!-- Sidebar mobile toggler --> */}
			<div  className="sidebar-mobile-toggler text-center">
				<Link id="point2" to="#" className="sidebar-mobile-main-toggle">
					<i className="icon-arrow-left8"></i>
				</Link>
				<span className="font-weight-semibold">Main sidebar</span>
				<a href="/" className="sidebar-mobile-expand">
					
				</a>
			</div>
			{/* <!-- /sidebar mobile toggler --> */}


			{/* <!-- Sidebar content --> */}
			<div className="sidebar-content">
				<div className="card card-sidebar-mobile">

										
					{/* <!-- Main navigation --> */}
					<div className="card-body p-0"id="SidebarNow" id="SidebarNow">
						<ul className="nav nav-sidebar" data-nav-type="accordion" >

							{/* <!-- Main --> */}
							<li className="nav-item-header mt-0"><div className="text-uppercase font-size-x22line-height-xs">Main</div> <i className="icon-menu" title="Main"></i></li>
							<li className="nav-item">
							<Link to="/" className="nav-link">
							<CardChecklist size={22} className="oIcons" />
								<span>
									Sales Quotation
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/saleOrder" className="nav-link">
							<Receipt size={22} className="oIcons" />
								<span>
									Sale Order
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/SalesInvoice" exact className="nav-link">
							<FileEarmarkFill size={22} className="oIcons" />
								<span>
									Sales Invoice
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/CustomerOutstanding" exact className="nav-link">
							<PersonBadgeFill size={22} className="oIcons" />
								<span>
									Customer Outstanding
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/PenaltyDetails" className="nav-link">
							<Folder2Open size={22} className="oIcons" />
								<span>
									Penalty Details
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/StockReport" className="nav-link">
							<Shop size={22} className="oIcons" />
								<span>
									Stock Report
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/BackLogReport" className="nav-link">
							<BookmarkCheckFill size={22} className="oIcons" />
								<span>
									Backlog Report
								</span>
							</Link>
						</li>
						<li class="nav-item-divider"></li>
						<li className="nav-item">
							<Link to="/ADR" className="nav-link">
							<BookmarksFill size={22} className="oIcons" />
							
								<span>
									ADR
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/PurchaseOrder" className="nav-link">
							<BagFill size={22} className="oIcons" />

								<span>
									Purchase Order
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
							<Upc size={22} className="oIcons" />							
								<span>
									Packing Slip
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/CourierDetails" className="nav-link">
							<Box size={22} className="oIcons" />
								<span>
									Courier Details
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/CustomerComplaint" className="nav-link">
							<PersonBadge size={22} className="oIcons" />
							
								<span>
									Customer Complaint Aproval
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/Distributor" className="nav-link">
							<BarChartSteps size={22} className="oIcons" />							
								<span>
									DTA
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
							<ClipboardData size={22} className="oIcons" />							
								<span>
									Promotion Details
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
							<RecordCircle size={22} className="oIcons" />							
								<span>
									SSR Records
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
							<Journals size={22} className="oIcons" />
								<span>
									Credit Note
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
							<StickyFill size={22} className="oIcons" />
								<span>
									TA and DA
								</span>
							</Link>
						</li>
							
							{/* <!-- /layout --> */}
								
						</ul>
					</div>
					{/* <!-- /main navigation --> */}

				</div>
			</div>
			{/* <!-- /sidebar content --> */}
			
		</div>
		/* <!-- /main sidebar --> */

  );
}

export default MainSideBar