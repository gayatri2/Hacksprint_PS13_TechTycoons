import React, { useState } from "react";
import "./OrderCard.css";

const OrderCard = (props) => {
  const [val, setVal] = React.useState({
    _id: "",
    restaurant_id: "",
    order: [],
    source: "",
    status: "",
    delivery_boy: "",
    total_cost: "",
  });
  const styles = (theme) => ({
    root: {},
  });

  const { order } = props;
  val["_id"] = order._id;
  val["restaurant_id"] = order.restaurant_id;
  val["order"] = order.order;
  val["source"] = order.source;
  val["status"] = order.status;
  val["delivery_boy"] = order.delivery_boy;
  val["total_cost"] = order.total_cost;
  React.useEffect(() => {}, [val]);
  const change = (id) => {
    Object.values(val.order[id])[0][0] = 1;
    console.log("yes", val);
  };
  if (val.status !== 1) {
    const mapItems = () => {
      return val.order.map((item, index) => {
        return (
          <tr>
            <td> {index} </td>
            <td> {Object.keys(item)[0]} </td>
            <td> {Object.values(item)[0][1]} </td>

            {Object.values(item)[0][0] === 0 ? (
              <td>
                {" "}
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={(e) => {
                    e.target.style.backgroundColor = "green";
                    styles.root["backgroundColor"] = "red";
                  }}
                >
                  Status
                </button>{" "}
              </td>
            ) : (
              <td>
                {" "}
                <button type="button" class="btn btn-success">
                  Done
                </button>{" "}
              </td>
            )}
          </tr>
        );
      });
    };
    return (
      <div className={styles.root}>
        <div className="order-card">
          <div className="row">
            <div className="col-5">
              <p>Order id: {val._id}</p>
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
                  Receiver: <b>{val.delivery_boy}</b>
                </p>
              </div>
              <div className="col-3 text-right">
                <p>
                  Total: <b>{val.total_cost} ₹</b>
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
