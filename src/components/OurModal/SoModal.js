import React from 'react'
import SoDetailTable from "../DetailTable/SoDetailTable";
import "./OurModal.css";

function SoModal(props) {
    
  return (
    <div>
<button type="button" id="myModal" className="btn btn-dark" data-toggle="modal" data-target=".bd-example-modal-lg" onClick ={props.onClick}  >Get Selected Items {props.main}</button>

<div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <SoDetailTable detailData={props.clickedData} 
      titles={["DocNum","CardName","PO-Date","PO-Number","Item-Code","Booked-Quantity","Product-Group","List-Price","Discount","Booking","Product-Spec","Total-Available-Stock","WareHouse","Quantity"]}
      />
    </div>
  </div>
</div>
    </div>
  )
}

export default SoModal