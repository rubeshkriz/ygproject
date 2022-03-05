import React from 'react'
import CoDetailTable from "../DetailTable/CoDetailTable";
import "./OurModal.css";

function CoModal(props) {
    
  return (
    <div>
<button type="button" id="myModal" className="btn btn-dark" data-toggle="modal" data-target=".bd-example-modal-lg" onClick ={props.onClick}  >Get Selected Items {props.main}</button>

<div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <CoDetailTable detailData={props.clickedData} 
      titles={['Doc-Num', 'Doc-Date', 'customer-Code','customer-Name','Document-Type','Document-Due-Date','BR-Ref-Number',"Balance-Due",'Recived-Amount','Balance-Amount']}
      />
    </div>
  </div>
</div>
    </div>
  )
}

export default CoModal