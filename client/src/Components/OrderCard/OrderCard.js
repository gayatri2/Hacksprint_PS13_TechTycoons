import React, { useState } from "react";
import "./OrderCard.css";

const OrderCard = (props) => {
  console.log(props.orderObj.order)
  props.orderObj.order.map(item =>{console.log(item)})
  return (
    <div className="container">
      <div className="order-card">
        <div className="row">
          <div className="col-5">
            <p>Order id: {props.orderObj._id}</p>
          </div>
          <div className="col-7 text-right">
            <p>Arrived: <b>10:00 PM</b></p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 order-table">
          {props.orderObj.order.map((item,index) =>(
             <table className="">
             <tr>
               <th>Sr. No.</th>
               <th>Item name</th>
               <th>Item units</th>
               <th>Status</th>
             </tr>
             <tr>
               <td>{index+1}</td>
               <td>{item.key}</td>
               <td></td>
               <td> <button type="button" class="btn btn-success">Done</button> </td>
             </tr>
             
           </table>

            
           ))}
           
          </div>
          <div className="row mt-2">
            <div className="col-6 ">
              <p>Receiver: <b>{props.orderObj.delivery_boy}</b></p>
            </div>
            <div className="col-3 text-right">
              <p>Total: <b>{props.orderObj.total_cost} ₹</b></p>
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