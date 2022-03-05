import React from 'react'
import SQDetailTable from "../DetailTable/SQDetailTable";
import "./OurModal.css";

function ourModal(props) {
    
  return (
    <div>
<button type="button" id="myModal" className="btn btn-dark" data-toggle="modal" data-target=".bd-example-modal-lg" onClick ={props.onClick}  >Get Selected Items {props.main}</button>

<div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <SQDetailTable detailData={props.clickedData} 
      titles={['DocNum','DocDate','customer-Name','Customer-Code','Delivery-Date','Status','Customer-PO-Num','Customer-PO-Date','ItemCode','ItemName','Quantity',"UOM","Price","Discont","Tax","Total"]}
      />
    </div>
  </div>
</div>
    </div>
  )
}

export default ourModal