import React from "react";
import { Plus, FileEarmarkExcelFill } from 'react-bootstrap-icons';

const BookList = props => {
  return props.bookDetails.map((val, idx) => {
    let name = `name-${idx}`,
      author = `author-${idx}`,
      dateOfPublish = `dateOfPublish-${idx}`,
      type = `type-${idx}`,
      price = `price-${idx}`;
    return (
      <div className="form-row" key={val.index}>
        <div className="col">
          <label>Name</label>
          <input
            type="text"
            className="form-control required"
            placeholder="Name"
            name="name"
            data-id={idx}
            id={name}
          />
        </div>
        <div className="col">
          <label>Author</label>
          <input
            type="text"
            className="form-control required"
            placeholder="Author"
            name="author"
            id={author}
            data-id={idx}
          />
        </div>
        <div className="col">
          <label>Type</label>
          <select className="form-control" name="type" id={type} data-id={idx}>
            <option>Select</option>
            <option>Biography</option>
            <option>Cooking</option>
            <option>Computer Programming</option>
            <option>Dictionary</option>
            <option>Fiction</option>
            <option>Horror</option>
            <option>Journalism</option>
          </select>
        </div>
        <div className="col">
          <label>Date of Publish</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter Date"
            name="dateOfPublish"
            id={dateOfPublish}
            data-id={idx}
          />
        </div>
        <div className="col">
          <label>Price</label>
          <input
            type="text"
            className="form-control"
            placeholder="Price"
            name="price"
            id={price}
            data-id={idx}
          />
        </div>
        <div className="col p-4">
          {idx === 0 ? (
            <button
              onClick={() => props.add()}
              type="button"
              className="btn btn-primary formBtn"
            >
              <Plus size={22} className="oIcons" />
            </button>
          ) : (
            <button
              className="btn btn-danger formBtn"
              onClick={() => props.delete(val)}
            >
                      <FileEarmarkExcelFill size={22} className="oIcons" />

            </button>
          )}
        </div>
      </div>
    );
  });
};
export default BookList;
