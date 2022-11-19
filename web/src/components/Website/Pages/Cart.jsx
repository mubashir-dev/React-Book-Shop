import React from "react";

function Cart() {
  return (
    <div>
      <div className="row mt-4">
        <h3>Your Bucket</h3>
        <br></br>
        <table className="table table-bordered  text-center">
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
          <tr className="p-2">
            <td>1</td>
            <td>React 101</td>
            <td>
            <input type="number" class="form-control"></input>    
            </td>
            <td>400</td>
            <td>400</td>
            <td>
              <button className="btn btn-danger btn-sm">delete</button>
            </td>
          </tr>
          <tr className="p-2">
            <td>1</td>
            <td>React 101</td>
            <td>
            <input type="number" class="form-control"></input>    
            </td>
            <td>400</td>
            <td>400</td>
            <td>
              <button className="btn btn-danger btn-sm">delete</button>
            </td>
          </tr>
        </table>
        <div className="row d-flex justify-content-end">
          <div className="col-md-4">
            <div className="row">
              <h4>Total Amount : 4000</h4>
              <br />
            </div>
            <div className="row">
              <button className="btn btn-primary btn-md">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
