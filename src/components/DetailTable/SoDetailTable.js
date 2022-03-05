import React, { useState, useEffect }  from "react";



const SoDetailTable = (props) => {

  const [List, setList] = useState([]);
  const [MasterChecked, setMasterChecked] = useState(false);
  const [SelectedList, setSelectedList] = useState([]);

  useEffect(() => {
    setList(props.detailData)    
  },[props.detailData]); 

  // Select/ UnSelect Table rows
  const onMasterCheck = (e) => {
    let tempList = List;
    // Check/ UnCheck All Items
    tempList.map((salesQuanty) => (salesQuanty.selected = e.target.checked));

    //Update State
    setMasterChecked(e.target.checked)
      setList(tempList)
      setSelectedList(List.filter((e) => e.selected))
  }

  // Update List Item's state and Master Checkbox State
  const onItemCheck = (e , item) => {
    let tempList = List;
    tempList.map((salesQuanty) => {
      if (salesQuanty.DocNum === item.DocNum) {
        salesQuanty.selected = e.target.checked;
      }
      return salesQuanty;
    });

    //To Control Master Checkbox State
    const totalItems = List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State
    
    setMasterChecked(totalItems === totalCheckedItems)
      setList(tempList)
      setSelectedList(List.filter((e) => e.selected))    
  }

  // Event to get selected rows(Optional)
  const getSelectedRows = (SelectedList) => {
    // setSelectedList(List.filter((e) => e.selected))
    console.log(SelectedList)
  }

  const stringSplit = (date) => {
    const str = date
    const s = str.split(" ")
    return s[0];
  }

  let head
  if(props.titles){
    { head = props.titles.map((title, i) => <th key={i} scope="col">{title}</th>)}
  }


    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 table-responsive">
         
          
            <table className="table">
              <thead>
                <tr>
                  {head} 
                </tr>
              </thead>
              <tbody>               
                {List && List.map((salesQuanty) => (
                  <tr key={salesQuanty.DocNum} className={salesQuanty.selected ? "selected" : ""}>
                    {/* {props.dataCol.map((title, i) => title)} */}
                    <td>{salesQuanty.DocNum}</td>                                        
                    <td>{salesQuanty.CardName}</td>
                    <td>{salesQuanty.U_PODate}</td>
                    <td>{salesQuanty.U_PONo}</td>
                    <td>{salesQuanty.ItemCode}</td>
                    <td></td>
                    <td>{salesQuanty.U_ProductGrp}</td>
                    <td>{salesQuanty.Price}</td>
                    <td>{salesQuanty.DiscPrcnt}</td>
                    <td></td>
                    <td>{salesQuanty.ItemName}</td>
                    <td></td>
                    <td>{salesQuanty.U_WhsCode}</td>
                    <td>{salesQuanty.Quantity}</td>
                    
                    
                  </tr>
                ))}
              </tbody>
            </table>
            
            
          </div>
        </div>
        
      </div>
    );
  }


export default SoDetailTable;