import React, { useState, useEffect, useRef } from 'react'
import {addADR, poItemData} from '../../Service/api';

function ADRForm() {
    let itemsSummary
    const inputEl = useRef("");
      const initialValues = {id:"", DocEntry:"", CardCode:"", CardName:"", LineNum:"15", ItemCode:"", ItemDescription:"", Size:"", Price:"", Discount:"", DiscountPrice:"", AdrDiscount:"", EndCustomer:""}
      const [FormValues, setFormValues] = useState(initialValues);    
      const [formErrors, setFormErrors] = useState({});    
      const [ItemList, setItemList] = useState([]);    
      const [isSubmit, setIsSubmit] = useState(false);     
  
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
          setFormValues({ ...FormValues, ItemDescription: result[0].ItemName,Size: result[0].FrgnName});
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
            if (!values.ItemCode) {
              errors.ItemCode = "ItemCode is required!";
            }
            if (!values.ItemDescription) {
              errors.ItemDescription = "ItemDescription is required!";
            }
            if (!values.Size) {
              errors.Size = "Size is required!";
            }
            if (!values.Price) {
              errors.Price = "Price is required!";
            }
            if (!values.Discount) {
              errors.Discount = "Discount is required!";
            }
            if (!values.DiscountPrice) {
              errors.DiscountPrice = "DiscountPrice is required!";
            }
            if (!values.AdrDiscount) {
              errors.AdrDiscount = "AdrDiscount is required!";
            }
            if (!values.EndCustomer) {
              errors.EndCustomer = "EndCustomer is required!";
            }
            
            return errors
      
      }
  
      let handleSubmit = async (e) => {
          e.preventDefault();
          setFormErrors(validate(FormValues))
          setIsSubmit(true);
          console.log(FormValues)        
          await addADR(FormValues);
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
                                                  <label>Customer Code</label>
                                                  <input type="text" name="CardCode" className="form-control" values={FormValues.CardCode} onChange={handleChange} placeholder="Customer Code"/>
                                          <p>{formErrors.CardCode}</p>
                                              </div>
                                          </div> 
  
                                          <div className="col-md-3">
                                              <div className="form-group">
                                                  <label>Customer Name</label>
                                                  <input type="text" name="CardName" className="form-control" values={FormValues.CardName} onChange={handleChange} placeholder="Customer Name"/>
                                          <p>{formErrors.CardName}</p>
                                              </div>
                                          </div>                                           
                                        </div>
  
                                      <div className="row">
                                          <div className="col-md-3">
                                              <div className="form-group">
                                                  <label>Item Code</label>
                    {/* <input ref={inputEl} type="text" placeholder="Item Code" className="form-control" value={searchTerm} onChange={getSearchTerm} /> */}

                                                  <input type="text" name="ItemCode" className="form-control" values={FormValues.ItemCode} onChange={handleChange} placeholder="Item Code"/>
                                                  <p>{formErrors.ItemCode}</p>
                                              
                                              </div>
                                          </div>                                       
  
                                          <div className="col-md-3">
                                              <div className="form-group">
                                                  <label>Product Description</label>
                                                  {/* <input type="text" name="ItemDescription" className="form-control" value={itemsSummary} onChange={handleChange} placeholder="Product Description"/> */}
                                                  <input type="text" name="ItemDescription" className="form-control" value={FormValues.ItemDescription} onChange={handleChange} placeholder="ItemDescription"/>
                                                  
                                                  <p>{formErrors.ItemDescription}</p>
                                              
                                              </div>
                                          </div>

                                          <div className="col-md-3">
                                              <div className="form-group">
                                                  <label>Item Size</label>
                                                  <input type="text" name="Size" className="form-control" value={FormValues.Size} onChange={handleChange} placeholder="Item Size"/>
                                                  <p>{formErrors.Size}</p>
                                              
                                              </div>
                                          </div>

                                          <div className="col-md-3">
                                              <div className="form-group">
                                                  <label>End Customer</label>
                                                  <input type="text" name="EndCustomer" className="form-control" values={FormValues.EndCustomer} onChange={handleChange} placeholder="End Customer"/>
                                                  <p>{formErrors.EndCustomer}</p>                                              
                                              </div>
                                          </div>
                                      </div>                              
  
                                      <div className="row">
                                          <div className="col-md-3">
                                              <div className="form-group">
                                                  <label>Price</label> 
                                                  <input type="text" name="Price" className="form-control" value={FormValues.Price} onChange={handleChange} placeholder="Price"/>                                               
                                          
                                                  <p>{formErrors.Price}</p>
                                              
                                              </div>
                                          </div>
  
                                          <div className="col-md-3">
                                              <div className="form-group">
                                                  <label>Discount</label>
                                                  <input type="text" name="Discount" className="form-control" value={FormValues.Discount} onChange={handleChange} placeholder="Discount"/>
                                                  <p>{formErrors.Discount}</p>
                                              
                                              </div>
                                          </div>
  
                                          <div className="col-md-3">
                                              <div className="form-group">
                                                  <label>Discount Price</label>
                                                  <input type="text" name="DiscountPrice" className="form-control" values={FormValues.DiscountPrice} onChange={handleChange} placeholder="Discount Price"/>
                                                  <p>{formErrors.DiscountPrice}</p>
                                              
                                              </div>
                                          </div>
  
                                          <div className="col-md-3">
                                              <div className="form-group">
                                                  <label>ADR Discount</label>
                                                  <input type="text" name="AdrDiscount" className="form-control" values={FormValues.AdrDiscount} onChange={handleChange} placeholder="ADR Discount"/>
                                                  <p>{formErrors.AdrDiscount}</p>                                              
                                              </div>
                                          </div>                                    
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
  
  export default ADRForm