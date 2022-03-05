import React from 'react'
import { Link } from "react-router-dom";
import { Receipt, CardChecklist, FileEarmarkFill, PersonBadgeFill, Folder2Open, Shop, BookmarkCheckFill, BookmarksFill,
BagFill, Upc, Box, PersonBadge, BarChartSteps, ClipboardData, RecordCircle, Journals, StickyFill } from 'react-bootstrap-icons';


function MainSideBar() {
  return (
    // <!-- Main sidebar -->
		<div className="sidebar sidebar-light sidebar-main sidebar-expand-md align-self-start">

			{/* <!-- Sidebar mobile toggler --> */}
			<div className="sidebar-mobile-toggler text-center">
				<a href="/" className="sidebar-mobile-main-toggle">
					<i className="icon-arrow-left8"></i>
				</a>
				<span className="font-weight-semibold">Main sidebar</span>
				<a href="/" className="sidebar-mobile-expand">
					<i className="icon-screen-full"></i>
					<i className="icon-screen-normal"></i>
				</a>
			</div>
			{/* <!-- /sidebar mobile toggler --> */}


			{/* <!-- Sidebar content --> */}
			<div className="sidebar-content">
				<div className="card card-sidebar-mobile">

										
					{/* <!-- Main navigation --> */}
					<div className="card-body p-0">
						<ul className="nav nav-sidebar" data-nav-type="accordion">

							{/* <!-- Main --> */}
							<li className="nav-item-header mt-0"><div className="text-uppercase font-size-xs line-height-xs">Main</div> <i className="icon-menu" title="Main"></i></li>
							<li className="nav-item">
							<a href="/" className="nav-link">
							<CardChecklist size={20} className="oIcons" />
								<span>
									Sales Quotation
								</span>
							</a>
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
							<Link to="/SalesInvoice" exact className="nav-link">
							<FileEarmarkFill size={20} className="oIcons" />
								<span>
									Sales Invoice
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<a href="/CustomerOutstanding" exact className="nav-link">
							<PersonBadgeFill size={20} className="oIcons" />
								<span>
									Customer Outstanding
								</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="/PenaltyDetails" className="nav-link">
							<Folder2Open size={20} className="oIcons" />
								<span>
									Penalty Details
								</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="/StockReport" className="nav-link">
							<Shop size={20} className="oIcons" />
								<span>
									Stock Report
								</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="/BackLogReport" className="nav-link">
							<BookmarkCheckFill size={20} className="oIcons" />
								<span>
									Backlog Report
								</span>
							</a>
						</li>
						<li class="nav-item-divider"></li>
						<li className="nav-item">
							<a href="/ADR" className="nav-link">
							<BookmarksFill size={20} className="oIcons" />
							
								<span>
									ADR
								</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="/PurchaseOrder" className="nav-link">
							<BagFill size={20} className="oIcons" />

								<span>
									Purchase Order
								</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="/" className="nav-link">
							<Upc size={20} className="oIcons" />							
								<span>
									Packing Slip
								</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="/" className="nav-link">
							<Box size={20} className="oIcons" />
								<span>
									Courier Details
								</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="/CustomerComplaint" className="nav-link">
							<PersonBadge size={20} className="oIcons" />
							
								<span>
									Customer Complaint Aproval
								</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="/" className="nav-link">
							<BarChartSteps size={20} className="oIcons" />							
								<span>
									DTA
								</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="/" className="nav-link">
							<ClipboardData size={20} className="oIcons" />							
								<span>
									Promotion Details
								</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="/" className="nav-link">
							<RecordCircle size={20} className="oIcons" />							
								<span>
									SSR Records
								</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="/" className="nav-link">
							<Journals size={20} className="oIcons" />
								<span>
									Credit Note
								</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="/" className="nav-link">
							<StickyFill size={20} className="oIcons" />
								<span>
									TA and DA
								</span>
							</a>
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