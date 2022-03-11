import React, { useState, useEffect, useRef } from "react";
import { Plus, FileEarmarkExcelFill } from 'react-bootstrap-icons';



const BookList = props => {
  
console.log(props.itemDatas)
    
 
  return props.bookDetails.map((val, idx) => {
    let ItemCode = `ItemCode-${idx}`,
      Dscription = `Dscription-${idx}`,
      Quantity = `Quantity-${idx}`,
      UOMCode = `UOMCode-${idx}`,
      price = `price-${idx}`,
      Discount = `Discount-${idx}`,
      Total = `Total-${idx}`,
      TaxOnly = `TaxOnly-${idx}`;
    
    return (
      <>
<div className="form-row" key={val.index}>

   <div className="row">
<div className="col-md-2">
<div className="form-group">
  <label>Item Code</label>		                                
                  <input type="text" name="ItemCode" className="form-control required" placeholder="Item Code"  data-id={idx} id={ItemCode}/>                  
                      </div>   
</div>

<div className="col-md-3">
<div className="form-group">
  <label>Item Name</label>
  {console.log(props.itemDatas)}
                  <input type="text" name="Dscription" className="form-control" placeholder="Item Name" value={props.itemDatas[idx].Dscription} data-id={idx} id={Dscription}/>                
                      </div>
</div>

                  <div className="col-md-1">
<div className="form-group">
  <label>Quantity</label>
                  <input type="text" name="Quantity" className="form-control" placeholder="Qty" data-id={idx} id={Quantity}/>
                
                      </div>
</div>

                  <div className="col-md-1">
<div className="form-group">
  <label>UOM</label>
                  <input type="text" name="UOMCode" className="form-control" placeholder="UOM" data-id={idx} id={UOMCode}/>
                
                      </div>
</div>

                  <div className="col-md-1">
<div className="form-group">
  <label>Price</label>
                  <input type="text" name="price" className="form-control" placeholder="price" data-id={idx} id={price}/>
                
                      </div>
</div>

<div className="col-md-1">
<div className="form-group">
  <label>Discount</label>
                  <input type="text" name="Discount" className="form-control" placeholder="%" data-id={idx} id={Discount}/>
                
                      </div>
</div>

                  <div className="col-md-1">
<div className="form-group">
  <label>Tax</label>
                  <input type="text" name="TaxOnly" className="form-control" placeholder="Tax" data-id={idx} id={TaxOnly}/>
                
                      </div>
</div>

                  <div className="col-md-1">
<div className="form-group">
  <label>Total</label>
                  <input type="text" name="Total" className="form-control" placeholder="Total" data-id={idx} id={Total}/>
                
                      </div>
</div>

<div className="col-md-1 p-4">
    {idx === 0 ? (
      <button
        onClick={() => props.add()}
        type="button"
        className="btn btn-primary "
      >
        <Plus size={22}  />
      </button>
    ) : (
      
     
      <button
        className="btn btn-danger "
        onClick={() => props.delete(val)}
      >
                <FileEarmarkExcelFill size={22}  />

      </button>
      
    )}
  </div>
</div>
  
</div> 
      </>
    );
  });
};
export default BookList;
