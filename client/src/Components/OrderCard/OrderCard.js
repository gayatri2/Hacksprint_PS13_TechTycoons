import React, { useState } from "react";
import "./OrderCard.css";

const OrderCard = (props) => {
  return (
    <div className="container">
      <div className="order-card">
        <div className="row">
          <div className="col-5">
            <p>Order id: {props.order._id}</p>
          </div>
          <div className="col-7 text-right">
            <p>Arrived: <b>10:00 PM</b></p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 order-table">
            <table className="">
              <tr>
                <th>Sr. No.</th>
                <th>Item name</th>
                <th>Item units</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>1. </td>
                <td>Pav bhaji </td>
                <td> 2 </td>
                <td> <button type="button" class="btn btn-success">Done</button> </td>
              </tr>
              <tr>
                <td>2. </td>
                <td>Vada pav </td>
                <td> 2 </td>
                <td> <button type="button" class="btn btn-primary">Waiting</button> </td>
              </tr>
              <tr>
                <td>3. </td>
                <td> Samosa </td>
                <td> 4 </td>
                <td> <button type="button" class="btn btn-primary">Waiting</button> </td>
              </tr>
            </table>
          </div>
          <div className="row mt-2">
            <div className="col-6 ">
              <p>Receiver: <b>{props.order.delivery_boy}</b></p>
            </div>
            <div className="col-3 text-right">
              <p>Total: <b>{props.order.total_cost} ₹</b></p>
            </div>
            <div className="col-3 text-right">
                <button type="button" class="btn btn-dark">Print</button>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default OrderCard;