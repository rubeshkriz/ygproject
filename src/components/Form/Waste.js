import React, { useState, useEffect, useRef } from 'react'
import { PersonBadge } from 'react-bootstrap-icons';
import {addPO, poItemData} from '../../Service/api';
import DataExtensionSelect from  "../../js/DataExtensionSelect";
import Appj from "../../js/Appj";
import FormSelect from "../../js/FormSelect";
import $ from "jquery";
import ItemNow from './ItemNow';
import BookView from "./bookView";
import "./styles.css";



function Waste() {
  let ItemDetailsForm = () => {
    "<ItemNow />"
  }

  useEffect(() => {
    var output = '';
		$('#ItemAdd').click(function(){
      $('#looprow').after(output)})
	},[]); 
  
  let itemsSummary
  const inputEl = useRef("");
    const initialValues = {id:"", DocEntry:"", CardCode:"", CardName:"",  PoNumber:"", Status:"", DocDate:"", Utype:"", TaxDate:"",
    LineNum:"", ItemCode:"", Dscription:"", Quantity:"", UOMCode:"", Price:"", Discount:"", Total:"", EndCustomer:"", TaxOnly:"",LineNum:"20"}
    const [FormValues, setFormValues] = useState(initialValues);    
    const [formErrors, setFormErrors] = useState({});    
    const [ItemList, setItemList] = useState([]);    
    const [isSubmit, setIsSubmit] = useState(false);


    // let handleChangeDate = (e) => {
    //   console.log(e)
    // }
    

    
    let handleChange = (e) => {
        const {name, value} = e.target;
        if(name === "ItemCode"){
          let AllItemLists = ItemList
          let result = AllItemLists.filter(checkID)
          function checkID(AllItemList) {
            // console.log(AllItemList.ItemCode)

            return AllItemList.ItemCode == value;
          }
          // console.log(`result= ${result[0].ItemName}`);
          setFormValues({ ...FormValues, Dscription: result[0].ItemName});
          console.log(FormValues);

        }else{
        console.log(`name${name}: values${value}`)
        setFormValues({ ...FormValues, [name]: value});
        console.log(FormValues)}
    }
    const validate = (values) => {
        const errors =  {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.id) {
            errors.id = "id is required!";
          }
          if (!values.DocEntry) {
            errors.DocEntry = "DocEntry is required!";
          }
          if (!values.CardCode) {
            errors.CardCode = "CardCode is required!";
          }
          if (!values.CardName) {
            errors.CardName = "CardName is required!";
          }
          if (!values.PoNumber) {
            errors.PoNumber = "PoNumber is required!";
          }
          if (!values.Status) {
            errors.Status = "Status is required!";
          }
          if (!values.DocDate) {
            errors.DocDate = "DocDate is required!";
          }
          if (!values.Utype) {
            errors.Utype = "Utype is required!";
          }
          if (!values.TaxDate) {
            errors.TaxDate = "TaxDate is required!";
          }
          if (!values.LineNum) {
            errors.LineNum = "LineNum is required!";
          }
          if (!values.ItemCode) {
            errors.ItemCode = "ItemCode is required!";
          }
          if (!values.Dscription) {
            errors.Dscription = "Dscription is required!";
          }
          if (!values.Quantity) {
            errors.Quantity = "Quantity is required!";
          }
          if (!values.UOMCode) {
            errors.UOMCode = "UOMCode is required!";
          }
          if (!values.Price) {
            errors.Price = "Price is required!";
          }
          if (!values.Discount) {
            errors.Discount = "Discount is required!";
          }
          if (!values.Total) {
            errors.Total = "Total is required!";
          }
          if (!values.EndCustomer) {
            errors.EndCustomer = "EndCustomer is required!";
          }
          if (!values.TaxOnly) {
            errors.TaxOnly = "TaxOnly is required!";
          }
          return errors
    
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(FormValues))
        setIsSubmit(true);
        console.log(FormValues)        
        await addPO(FormValues);
        // history.push('./all');
        
    }

    useEffect(() => {
         getitemDetails();
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(FormValues);
        }
      }, [formErrors]);

      const getitemDetails = async () => {
        let response = await poItemData();
        if (response) {
          setItemList(response.data.message);
        //   var data = response.data.message;
        //   var slice = data.slice(offset, offset + perPage)
    
    
        //   setpageCount(Math.ceil(data.length / perPage))
        //   settabledata(slice)
        }
      }

      

  return (
    <div>
        <div className="row">        
        
					<div className="col-lg-12">
			            <div className="card">
         <pre>{JSON.stringify(FormValues, undefined, 2)}</pre>                       

			                <div className="card-body">
			                	<form onSubmit={handleSubmit}>
									<div className="row">
										<div className="col-md-3">
											<div className="form-group">
												<label>Customer Code</label>
				                                <input type="text" name="CardCode" className="form-control" values={FormValues.CardCode} onChange={handleChange} placeholder="Customer Code"/>
                                        <p>{formErrors.CardCode}</p>                                                
			                                </div>
										</div>

										<div className="col-md-3">
											<div className="form-group">
												<label>Document Number</label>
				                                <input type="text" name="id" className="form-control" values={FormValues.id} onChange={handleChange} placeholder="Document Number"/>
                                        <p>{formErrors.id}</p>
			                                </div>
										</div>

                                        <div className="col-md-3">
											<div className="form-group">
												<label>Document Entry</label>
				                                <input type="text" name="DocEntry" className="form-control" values={FormValues.DocEntry} onChange={handleChange} placeholder="Document Entry"/>
                                                <p>{formErrors.DocEntry}</p>
			                                
                                            </div>
										</div>

                                        <div className="col-md-3">
											<div className="form-group">
												<label>Document Series</label>
				                                <input type="text" name="Utype" className="form-control" values="" onChange={handleChange} placeholder="Document Series"/>
                                                <p>{formErrors.Utype}</p>
			                                
                                            </div>
										</div>
									</div>

									<div className="row">
										<div className="col-md-4">
											<div className="form-group">
												<label>Customer Name</label>
				                                <input type="text" name="CardName" className="form-control" values={FormValues.CardName} onChange={handleChange} placeholder="Customer Name"/>
                                                <p>{formErrors.CardName}</p>
			                                
                                            </div>
										</div>

										<div className="col-md-4">
											<div className="form-group">
												<label>Document Date</label>
                        {/* <input type="text" class="form-control daterange-single" name="DocDate" values="05/09/2022" onChange={handleChange}/> */}
                                        <input type="text" id="datePicker" name="DocDate" className="form-control" values={FormValues.DocDate} onChange={handleChange} placeholder="Document Date"/>
                                                <p>{formErrors.DocDate}</p>
			                                
                                            </div>
										</div>

                                        <div className="col-md-4">
											<div className="form-group">
												<label>Customer PO-Date</label>
				                                <input type="text" name="TaxDate" className="form-control" values={FormValues.TaxDate} onChange={handleChange} placeholder="Customer PO-Date"/>
                                                <p>{formErrors.TaxDate}</p>
			                                
                                            </div>
										</div>
									</div>
                                    <div className="row">
										<div className="col-md-4">
											<div className="form-group">
												<label>End Customer</label>
				                                <input type="text" name="EndCustomer" className="form-control" values={FormValues.EndCustomer} onChange={handleChange} placeholder="End Customer"/>
                                                <p>{formErrors.EndCustomer}</p>
			                                
                                            </div>
										</div>

										<div className="col-md-4">
											<div className="form-group">
												<label>Status</label>
				                                <input type="text" name="Status" className="form-control" values={FormValues.Status} onChange={handleChange} placeholder="Status"/>
                                                <p>{formErrors.Status}</p>
			                                
                                            </div>
										</div>

                                        <div className="col-md-4">
											<div className="form-group">
												<label>Customer PO-Number</label>
				                                <input type="text" name="PoNumber" className="form-control" values={FormValues.PoNumber} onChange={handleChange} placeholder="Customer PO-Number"/>
                                                <p>{formErrors.PoNumber}</p>
			                                
                                            </div>
										</div>
									</div>

                                    <h4>Item Details</h4>

                         {ItemDetailsForm}
                         <div id="looprow" className="row">
    <div className="col-md-2">
      <div className="form-group">
        <label>Item Code</label>		                                
                        <input type="text" name="ItemCode" className="form-control" values={FormValues.ItemCode} onChange={handleChange} placeholder="Item Code"/>
                                <p>{formErrors.ItemCode}</p>
                      
                            </div>
       {/* <div class="form-group">
  <label>Results background color</label>
  <select multiple="multiple" class="form-control select" data-container-css-class="bg-teal-400" data-fouc>
    <optgroup label="Mountain Time Zone">
      <option value="AZ" selected>Arizona</option>
      <option value="CO">Colorado</option>
      <option value="ID">Idaho</option>
      <option value="WY">Wyoming</option>
    </optgroup>
    <optgroup label="Central Time Zone">
      <option value="IL" selected>Illinois</option>
      <option value="IA">Iowa</option>
      <option value="KS" selected>Kansas</option>
      <option value="KY">Kentucky</option>
    </optgroup>
  </select>
</div> */}
    </div>

    <div className="col-md-3">
      <div className="form-group">
        <label>Item Name</label>
                        <input type="text" name="Dscription" className="form-control" value={FormValues.Dscription} onChange={handleChange} placeholder="Item Name"/>
                                <p>{formErrors.Dscription}</p>
                      
                            </div>
    </div>

                        <div className="col-md-1">
      <div className="form-group">
        <label>Quantity</label>
                        <input type="text" name="Quantity" className="form-control" values={FormValues.Quantity} onChange={handleChange} placeholder="Qty"/>
                                <p>{formErrors.Quantity}</p>
                      
                            </div>
    </div>

                        <div className="col-md-1">
      <div className="form-group">
        <label>UOM</label>
                        <input type="text" name="UOMCode" className="form-control" values={FormValues.UOMCode} onChange={handleChange} placeholder="UOM"/>
                                <p>{formErrors.UOMCode}</p>
                      
                            </div>
    </div>

                        <div className="col-md-1">
      <div className="form-group">
        <label>Price</label>
                        <input type="text" name="Price" className="form-control" values={FormValues.Price} onChange={handleChange} placeholder="Price"/>
                                <p>{formErrors.Price}</p>
                      
                            </div>
    </div>

    <div className="col-md-1">
      <div className="form-group">
        <label>Discount</label>
                        <input type="text" name="Discount" className="form-control" values={FormValues.Discount} onChange={handleChange} placeholder="%"/>
                                <p>{formErrors.Discount}</p>
                      
                            </div>
    </div>

                        <div className="col-md-1">
      <div className="form-group">
        <label>Tax</label>
                        <input type="text" name="TaxOnly" className="form-control" values={FormValues.TaxOnly} onChange={handleChange} placeholder="Tax"/>
                                <p>{formErrors.TaxOnly}</p>
                      
                            </div>
    </div>

                        <div className="col-md-2">
      <div className="form-group">
        <label>Total</label>
                        <input type="text" name="Total" className="form-control" values={FormValues.Total} onChange={handleChange} placeholder="Total"/>
                                <p>{formErrors.Total}</p>
                      
                            </div>
    </div>
  </div>
  <BookView />

                  
                              <div className="text-right">
			                        	<button type="submit" className="btn btn-primary">Submit <i className="icon-paperplane ml-2"></i></button>
			                        </div>
		                        </form>
						    </div>
						</div>
					</div>
				</div>
        {DataExtensionSelect}
        {Appj}
        {FormSelect}
    </div>
  )
}

export default Waste