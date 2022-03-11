import React from "react";
import BookList from "./bookCreate";
import {poItemData} from '../../Service/api';

class BookView extends React.Component {
  state = {
    bookDetails: [
      {
        index: Math.random(),
        ItemCode: "",
        Dscription: "",
        Quantity: "",
        UOMCode: "",
        price: "",
        Discount: "",
        Total: "",
        TaxOnly: ""
      }
    ],
    ItemList: []
  };
   getitemDetails = async () => {
    let response = await poItemData();
    if (response) {
      this.setState({ItemList:response.data.message});
    }
  }
  componentWillMount() {
    this.getitemDetails();        
  }

  handleChange = e => {
    let bookDetails = [...this.state.bookDetails];

        if(e.target.name === "ItemCode"){
          let AllItemLists = this.state.ItemList
          let result = AllItemLists.filter(checkID)
          function checkID(AllItemList) {
            // console.log(AllItemList.ItemCode)

            return AllItemList.ItemCode == e.target.value;
          }
      bookDetails[e.target.dataset.id].ItemCode = result[0].ItemCode;
      bookDetails[e.target.dataset.id].Dscription = result[0].ItemName;
                // setFormValues({ ...FormValues, Dscription: result[0].ItemName, ItemCode: result[0].ItemCode});
          // console.log(FormValues);

        }
        if ([ "Quantity", "UOMCode", "price","Discount", "Total", "TaxOnly"].includes(e.target.name)) {
      // let bookDetails = [...this.state.bookDetails];
      bookDetails[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  addNewRow = e => {
    this.setState(prevState => ({
      bookDetails: [
        ...prevState.bookDetails,
        {
          index: Math.random(),
          ItemCode: "",
          Dscription: "",
          Quantity: "",
          UOMCode: "",
          price: "",
          Discount: "",
          Total: "",
          TaxOnly: ""
        }
      ]
    }));
  };

  deteteRow = index => {
    this.setState({
      bookDetails: this.state.bookDetails.filter(
        (s, sindex) => index !== sindex
      )
    });
  };

  clickOnDelete(record) {
    this.setState({
      bookDetails: this.state.bookDetails.filter(r => r !== record)
    });
  }
  render() {
    let { bookDetails } = this.state;
    return (
      <div className="content">
         {/* <pre>{JSON.stringify(this.state.bookDetails, undefined, 2)}</pre>                        */}

        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-12">
              <h2 className="text-center"> Enter Items Details</h2>
              <div className="container">
                <div className="row">
                  <BookList
                  itemcode={this.props.itemcode}
                  description={this.props.description}
                    add={this.addNewRow}
                    delete={this.clickOnDelete.bind(this)}
                    bookDetails={bookDetails}
                    itemDatas={this.state.bookDetails}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default BookView;
