import React from 'react'
import SiDetailTable from "../DetailTable/SiDetailTable";
import "./OurModal.css";

function SiModal(props) {
    
  return (
    <div>
<button type="button" id="myModal" className="btn btn-dark" data-toggle="modal" data-target=".bd-example-modal-lg" onClick ={props.onClick}  >Get Selected Items {props.main}</button>

<div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <SiDetailTable detailData={props.clickedData} 
      titles={['Invoice-Number', 'Invoice-Date','Due-Date','customer-Name',"Customer-PO-Num","Customer-SalesOrder-Num","Packing-Slip-Num","Item-Code","Item-Description","Quantity","Price","Discont","Tax","Total","Status"]}
      />
    </div>
  </div>
</div>
    </div>
  )
}

export default SiModal