import React, { useState, useEffect, useRef } from "react";
import ReactPaginate from 'react-paginate';

import { CourierDetails } from '../../Service/api';
// import PdModal from "../OurModal/PdModal"



const CdTable = (props) => {

  const inputEl = useRef("");

  const [List, setList] = useState([]);
  const [MasterChecked, setMasterChecked] = useState(false);
  const [SelectedList, setSelectedList] = useState([]);

  ////////////////////
  const [offset, setoffset] = useState(0);
  const [tabledata, settabledata] = useState([]);
  const [perPage, setperPage] = useState(2);
  const [currentPage, setcurrentPage] = useState(0);
  const [pageCount, setpageCount] = useState(0);
  const [searchTerm, setsearchTerm] = useState(" ");
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (searchTerm) => {
    setsearchTerm(searchTerm);

    if (searchTerm !== "") {
      console.log(List)
      const newTableList = List.filter((fidata) => {
        return Object.values(fidata)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      console.log(newTableList)
      setSearchResults(newTableList);
    } else {
      setSearchResults(List);
    }
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;


    setcurrentPage(selectedPage)
    setoffset(offset)

    const loadMoreData = () => {
      const data = List;
      const slice = data.slice(offset, offset + perPage);
      setpageCount(Math.ceil(data.length / perPage))
      settabledata(slice)
    }
    loadMoreData();
  };


  //////////////////////////

  useEffect(() => {
    getSalesQuotationDatas();
  }, []);

  const getSalesQuotationDatas = async () => {
    let response = await CourierDetails();
    if (response) {
      setList(response.data.message);
      var data = response.data.message;
      var slice = data.slice(offset, offset + perPage)


      setpageCount(Math.ceil(data.length / perPage))
      settabledata(slice)
    }
  }



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
  const onItemCheck = (e, item) => {
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
    setSelectedList(List.filter((e) => e.selected))
  }

  const stringSplit = (date) => {
    const str = date
    const s = str.split(/(?<=^\S+)\s/)
    return s[0];
  }


  const getSearchTerm = () => {
    searchHandler(inputEl.current.value);
  };

  let resultData

  if (searchResults.length > 0) {
    console.log(`searchResults ${searchResults}`)

    resultData = searchResults.map((salesQuanty) => (
      <tr key={salesQuanty.DocNum} className={salesQuanty.selected ? "selected" : ""}>
        {/* <th scope="row">
          <input
            type="checkbox"
            checked={salesQuanty.selected}
            className="form-check-input"
            id="rowcheck{salesQuanty.DocNum}"
            onChange={(e) => onItemCheck(e, salesQuanty)}
          />
        </th> */}
        <td>{salesQuanty.U_Voucher}</td>
        <td>{stringSplit(salesQuanty.U_VouchrDte)}</td>
        <td>{salesQuanty.U_CardCode}</td>
        <td>{salesQuanty.U_CardName}</td>
        <td>{salesQuanty.U_ItemCode}</td>
        <td>{salesQuanty.U_CusPo}</td>
        <td>{salesQuanty.U_SaleNo}</td>
        <td>{salesQuanty.U_ItemShort}</td>
        <td>{salesQuanty.U_Quantity}</td>
        <td>{salesQuanty.U_Docket}</td>
        <td>{salesQuanty.U_CourName}</td>
        <td>{salesQuanty.U_BillNo}</td>
        <td>{salesQuanty.U_Remarks}</td>
      </tr>
    ))
  } else {
    resultData = tabledata.map((salesQuanty) => (
      <tr key={salesQuanty.DocNum} className={salesQuanty.selected ? "selected" : ""}>
        {/* <th scope="row">
          <input
            type="checkbox"
            checked={salesQuanty.selected}
            className="form-check-input"
            id="rowcheck{salesQuanty.DocNum}"
            onChange={(e) => onItemCheck(e, salesQuanty)}
          />
        </th> */}
        <td>{salesQuanty.U_Voucher}</td>
        <td>{stringSplit(salesQuanty.U_VouchrDte)}</td>
        <td>{salesQuanty.U_CardCode}</td>
        <td>{salesQuanty.U_CardName}</td>
        <td>{salesQuanty.U_ItemCode}</td>
        <td>{salesQuanty.U_CusPo}</td>
        <td>{salesQuanty.U_SaleNo}</td>
        <td>{salesQuanty.U_ItemShort}</td>
        <td>{salesQuanty.U_Quantity}</td>
        <td>{salesQuanty.U_Docket}</td>
        <td>{salesQuanty.U_CourName}</td>
        <td>{salesQuanty.U_BillNo}</td>
        <td>{salesQuanty.U_Remarks}</td>
      </tr>
    ))
  }


  return (
    <div className="container">
      <div className="row">

        <div className="col-md-3 col-sm-3">
          <input

            ref={inputEl}
            type="text"
            placeholder="Search Result"
            className="form-control smInput"
            value={searchTerm}
            onChange={getSearchTerm}
          />
        </div>


        {/* <div className="col-md-4 col-sm-4">
          <PdModal onClick={() => getSelectedRows(SelectedList)} clickedData={SelectedList} main={SelectedList.length}>

          </PdModal>

        </div> */}
        <div className="col-md-4 col-sm-4">
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 table-responsive">
          <table className="table ">
            <thead>
              <tr>
                {/* <th scope="col">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={MasterChecked}
                    id="mastercheck"
                    onChange={(e) => onMasterCheck(e)}
                  />
                </th> */}

                {props.titles.map((title, i) => <th key={i} scope="col">{title}</th>)}


              </tr>
            </thead>
            <tbody>
              {resultData}
            </tbody>
          </table>





        </div>
      </div>

    </div>
  );
}


export default CdTable;