import React, { useState } from "react";
import "./OrderCard.css";

const OrderCard = (props) => {
  const { order } = props;
  if (order) {
    const mapItems = () => {
      return order.order.map((item, index) => {
        return (
          <tr>
            <td> {index} </td>
            <td> {Object.keys(item)[0]} </td>
            <td> {Object.values(item)[0][1]} </td>
            <td>
              {" "}
              <button type="button" class="btn btn-success">
                Done
              </button>{" "}
            </td>
          </tr>
        );
      });
    };
    return (
      <div className="container">
        <div className="order-card">
          <div className="row">
            <div className="col-5">
              <p>Order id: {order._id}</p>
            </div>
            <div className="col-7 text-right">
              <p>
                Arrived: <b>10:00 PM</b>
              </p>
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
                {mapItems()}
              </table>
            </div>
            <div className="row mt-2">
              <div className="col-6 ">
                <p>
                  Receiver: <b>{order.delivery_boy}</b>
                </p>
              </div>
              <div className="col-3 text-right">
                <p>
                  Total: <b>{order.total_cost} ₹</b>
                </p>
              </div>
              <div className="col-3 text-right">
                <button type="button" class="btn btn-dark">
                  Print
                </button>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
  console.log(props.order);
};

export default OrderCard;
