import React, { useState, useEffect, useRef } from 'react'
import {addCustomerComplint, poItemData} from '../../Service/api';

function CustomerComplaintForm() {
    let itemsSummary
    const inputEl = useRef("");
      // const initialValues = {CardCode:"", CardName:"",IncoiceNo:"",SalesEmployee:"", DocNum:"", DocDate:"", WONO:"", Type:"", Location:"", Priority:"", ComplaintType:"", ItemCode:"", Description:"", Product:"", Quantity:"",ComplaintDescription:"",ReplacementRequired:"",SalesType:""}
      const initialValues = {DocNum:"", DocEntry:"",U_CardCode:"",U_CardName:"", U_ItemCode:"", U_ActTakn:"", U_Status:"", U_ItemName:"", U_Complnt:"", U_DocDate:""}
      const [FormValues, setFormValues] = useState(initialValues);    
      const [formErrors, setFormErrors] = useState({});    
      const [ItemList, setItemList] = useState([]);    
      const [isSubmit, setIsSubmit] = useState(false);
  
      const [searchTerm, setsearchTerm] = useState(" ");
    const [searchResults, setSearchResults] = useState([]);
  
      const searchHandler = (searchTerm) => {
        setsearchTerm(searchTerm);
    
        if (searchTerm !== "") {
          const newTableList = ItemList.filter((fidata) => {
            return Object.values(fidata)
              .join(" ")
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          });
          setSearchResults(newTableList);
          console.log(searchResults)
  
        } else {
          setSearchResults(ItemList);
        }
      }
  
      if (searchResults.length > 0) {
        console.log(`searchResults ok`)
        searchResults.map((searchResult)=>{
          console.log(searchResult.ItemName)
          
          itemsSummary = searchResult.ItemName
          // setFormValues.Dscription=searchResult.ItemName;
        })
      }else{
          console.log("nothing")
        }
  
      let handleChange = (e) => {
          const {name, value} = e.target;
          setFormValues({ ...FormValues, [name]: value});
          console.log(FormValues)
      }
      const validate = (values) => {
          const errors =  {};
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
          if (!values.DocNum) {
              errors.DocNum = "DocNum is required!";
            }
            if (!values.DocEntry) {
              errors.DocEntry = "DocEntry is required!";
            }
            if (!values.U_CardCode) {
              errors.U_CardCode = "U_CardCode is required!";
            }
            if (!values.U_CardName) {
              errors.U_CardName = "U_CardName is required!";
            }            
            if (!values.U_ItemCode) {
              errors.U_ItemCode = "U_ItemCode is required!";
            }
            if (!values.U_ActTakn) {
              errors.U_ActTakn = "U_ActTakn is required!";
            }
            if (!values.U_Status) {
              errors.U_Status = "U_Status is required!";
            }
            if (!values.U_ItemName) {
              errors.U_ItemName = "U_ItemName is required!";
            }
            if (!values.U_Complnt) {
              errors.U_Complnt = "U_Complnt is required!";
            }
            if (!values.U_DocDate) {
              errors.U_DocDate = "U_DocDate is required!";
            }
            
            
            return errors
      
      }
  
      let handleSubmit = async (e) => {
          e.preventDefault();
          setFormErrors(validate(FormValues))
          setIsSubmit(true);
          console.log(FormValues)        
          await addCustomerComplint(FormValues);
          // history.push('./all');
          
      }
  
      useEffect(() => {
          getitemDetails();
          console.log(formErrors);
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
  
        const getSearchTerm = () => {
          searchHandler(inputEl.current.value);
        };

       
  
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
                                                  <label>Card Code</label>
                                                  <input type="text" name="U_CardCode" className="form-control" values={FormValues.U_CardCode} onChange={handleChange} placeholder="Card Code"/>
                                          <p>{formErrors.U_CardCode}</p>                                                
                                              </div>
                                          </div>

                                          <div className="col-md-3">
                                              <div className="form-group">
                                                  <label>Card Name</label>
                                                  <input type="text" name="U_CardName" className="form-control" values={FormValues.U_CardName} onChange={handleChange} placeholder="Card Name"/>
                                          <p>{formErrors.U_CardName}</p>                                                
                                              </div>
                                          </div>

                                          <div className="col-md-3">
                                              <div className="form-group">
                                                  <label>Doc Num</label>
                                                  <input type="text" name="DocNum" className="form-control" values={FormValues.DocNum} onChange={handleChange} placeholder="Doc Num"/>
                                          <p>{formErrors.DocNum}</p>
                                              </div>
                                          </div> 
  
                                          <div className="col-md-3">
                                              <div className="form-group">
                                                  <label>Doc Date</label>
                                                  <input type="text" name="U_DocDate" className="form-control" values={FormValues.U_DocDate} onChange={handleChange} placeholder="Doc Date"/>
                                          <p>{formErrors.U_DocDate}</p>
                                              </div>
                                          </div>                                           
                                        </div>
  
                                      <div className="row">
                                          <div className="col-md-4">
                                              <div className="form-group">
                                                  <label>Document Entry</label>
                    {/* <input ref={inputEl} type="text" placeholder="Item Code" className="form-control" value={searchTerm} onChange={getSearchTerm} /> */}

                                                  <input type="text" name="DocEntry" className="form-control" values={FormValues.DocEntry} onChange={handleChange} placeholder="Document Entry"/>
                                                  <p>{formErrors.DocEntry}</p>
                                              
                                              </div>
                                          </div>                                       
  
                                          <div className="col-md-4">
                                              <div className="form-group">
                                                  <label>Action Taken</label>
                                                  {/* <input type="text" name="ItemDescription" className="form-control" value={itemsSummary} onChange={handleChange} placeholder="Product Description"/> */}
                                                  <input type="text" name="U_ActTakn" className="form-control" values={FormValues.U_ActTakn} onChange={handleChange} placeholder="Action Taken"/>
                                                  
                                                  <p>{formErrors.U_ActTakn}</p>
                                              
                                              </div>
                                          </div>

                                          <div className="col-md-4">
                                              <div className="form-group">
                                                  <label>Status</label>
                                                  <input type="text" name="U_Status" className="form-control" values={FormValues.U_Status} onChange={handleChange} placeholder="Status"/>
                                                  <p>{formErrors.U_Status}</p>
                                              
                                              </div>
                                          </div>                                          
                                      </div>                              
  
                                      <div className="row">
                                          <div className="col-md-12">
                                              <div className="form-group">
                                                  <label>Complaint</label> 
                                                  <input type="text" name="U_Complnt" className="form-control" value={FormValues.U_Complnt} onChange={handleChange} placeholder="Complnt"/>                                               
                                          
                                                  <p>{formErrors.U_Complnt}</p>
                                              
                                              </div>
                                          </div>
  
                                          {/* <div className="col-md-3">
                                              <div className="form-group">
                                                  <label>Location</label>
                                                  <input type="text" name="Discount" className="form-control" value={FormValues.Discount} onChange={handleChange} placeholder="Discount"/>
                                                  <p>{formErrors.Discount}</p>
                                              
                                              </div>
                                          </div>
  
                                          <div className="col-md-3">
                                              <div className="form-group">
                                                  <label>Priority</label>
                                                  <input type="text" name="DiscountPrice" className="form-control" values={FormValues.DiscountPrice} onChange={handleChange} placeholder="Discount Price"/>
                                                  <p>{formErrors.DiscountPrice}</p>
                                              
                                              </div>
                                          </div>
  
                                          <div className="col-md-3">
                                              <div className="form-group">
                                                  <label>Complaint Type</label>
                                                  <input type="text" name="AdrDiscount" className="form-control" values={FormValues.AdrDiscount} onChange={handleChange} placeholder="ADR Discount"/>
                                                  <p>{formErrors.AdrDiscount}</p>                                              
                                              </div>
                                          </div>                                     */}
                                      </div>
                                      <h4>Item Details</h4>

                                      <div className="row">
                                          <div className="col-md-6">
                                              <div className="form-group">
                                                  <label>ItemCode</label> 
                                                  <input type="text" name="U_ItemCode" className="form-control" value={FormValues.U_ItemCode} onChange={handleChange} placeholder="Item Code"/>                                               
                                          
                                                  <p>{formErrors.U_ItemCode}</p>
                                              
                                              </div>
                                          </div>
  
                                          <div className="col-md-6">
                                              <div className="form-group">
                                                  <label>Description</label>
                                                  <input type="text" name="U_ItemName" className="form-control" value={FormValues.U_ItemName} onChange={handleChange} placeholder="Description"/>
                                                  <p>{formErrors.U_ItemName}</p>
                                              
                                              </div>
                                          </div>
{/*   
                                          <div className="col-md-2">
                                              <div className="form-group">
                                                  <label>Product</label>
                                                  <input type="text" name="DiscountItemCode" className="form-control" values={FormValues.DiscountPrice} onChange={handleChange} placeholder="Product"/>
                                                  <p>{formErrors.DiscountPrice}</p>
                                              
                                              </div>
                                          </div>
  
                                          <div className="col-md-1">
                                              <div className="form-group">
                                                  <label>Quntity</label>
                                                  <input type="text" name="AdrDiscount" className="form-control" values={FormValues.AdrDiscount} onChange={handleChange} placeholder="Qty"/>
                                                  <p>{formErrors.AdrDiscount}</p>                                              
                                              </div>
                                          </div>   

                                          <div className="col-md-3">
                                              <div className="form-group">
                                                  <label>Complaint Description</label> 
                                                  <input type="text" name="Price" className="form-control" value={FormValues.Price} onChange={handleChange} placeholder="Complaint Description"/>                                               
                                          
                                                  <p>{formErrors.Price}</p>
                                              
                                              </div>
                                          </div>
  
                                          <div className="col-md-1">
                                              <div className="form-group">
                                                  <label>Replacement</label>
                                                  <input type="text" name="Discount" className="form-control" value={FormValues.Discount} onChange={handleChange} placeholder="EX"/>
                                                  <p>{formErrors.Discount}</p>
                                              
                                              </div>
                                          </div>
  
                                          <div className="col-md-1">
                                              <div className="form-group">
                                                  <label>Sales Type</label>
                                                  <input type="text" name="DiscountPrice" className="form-control" values={FormValues.DiscountPrice} onChange={handleChange} placeholder="Type"/>
                                                  <p>{formErrors.DiscountPrice}</p>                                              
                                              </div>
                                          </div>                                                                               */}
                                      </div>
  
                                      <div className="text-right">
                                          <button type="submit" className="btn btn-primary">Submit <i className="icon-paperplane ml-2"></i></button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
      </div>
    )
  }
  
  export default CustomerComplaintForm