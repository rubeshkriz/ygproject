import './App.css';
import {BrowserRouter as Router,Redirect ,
Switch,
Route,
} from "react-router-dom";

import SaleOrder from "./Pages/SaleOrder/SaleOrder";
import SalesInvoice from "./Pages/SalesInvoice/SalesInvoice";
import PenaltyDetails from "./Pages/PenaltyDetails/PenaltyDetails";
import CourierDetails from "./Pages/CourierDetails/CourierDetails";
import CustomerOutstanding from "./Pages/CustomerOutstanding/CustomerOutstanding";
import StockReport from "./Pages/StockReport/StockReport";
import Distributor from "./Pages/Distributor/Distributor";
import BackLogReport from "./Pages/BackLogReport/BackLogReport";
import PurchaseOrder from "./Pages/PurchaseOrder/PurchaseOrder";
import ADR from "./Pages/ADR/ADR";
import CustomerComplaint from "./Pages/CustomerComplaint/CustomerComplaint";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"





function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <div className="App">
      <Router>
      <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/saleOrder">
            <SaleOrder />
          </Route>
          <Route exact path="/SalesInvoice">
            <SalesInvoice />
          </Route>          
          <Route exact path="/CustomerOutstanding">
            <CustomerOutstanding />
          </Route>
          <Route exact path="/PenaltyDetails">
            <PenaltyDetails />
          </Route>
          <Route exact path="/CourierDetails">
            <CourierDetails />
          </Route>
          <Route exact path="/StockReport">
            <StockReport />
          </Route>
          <Route exact path="/Distributor">
            <Distributor />
          </Route>
          <Route exact path="/BackLogReport">
            <BackLogReport />
          </Route> 
          <Route exact path="/ADR">
            <ADR />
          </Route> 
          <Route exact path="/PurchaseOrder">
            <PurchaseOrder />
          </Route>
          <Route exact path="/CustomerComplaint">
            <CustomerComplaint />
          </Route>              
          <Route exact path="/Login">
            <Login />
          </Route>
          

        </Switch>
        </Router>
      </div>
      </header>
    </div>
  );
}

export default App;
