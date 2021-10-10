import React, { useState } from "react";
import "./OrderCard.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addOrder } from "../../actions/invent";
import { Link } from "react-router-dom";

const OrderCard = (props) => {
  const dispatch = useDispatch();
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

  const { order, orderIndex } = props;
  const url = "/invoice/" + orderIndex;
  val["_id"] = order._id;
  val["restaurant_id"] = order.restaurant_id;
  val["order"] = order.order;
  val["source"] = order.source;
  val["status"] = order.status;
  console.log("we", typeof val.status);
  val["delivery_boy"] = order.delivery_boy;
  val["total_cost"] = order.total_cost;
  React.useEffect(() => {}, [val]);
  const change = (id, index) => {
    const url = id + "/" + index;
    // console.log(url);
    dispatch(addOrder(url));
    window.location.reload();
  };
  if (val.status) {
    const mapItems = () => {
      return val.order.map((item, index) => {
        return (
          <tr>
            <td> {index} </td>
            <td> {Object.keys(item)[0]} </td>
            <td> {Object.values(item)[0][1]} </td>
            {/* {console.log(Object.values(item)[0][0])} */}
            {Object.values(item)[0][0] === 0 ? (
              <td>
                {" "}
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={(e) => {
                    change(val._id, index);
                  }}
                >
                  Pending
                </button>{" "}
              </td>
            ) : (
              <td>
                {" "}
                <button type="button" class="btn btn-success">
                  Completed
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
                Arrived at:{" "}
                <b>
                  {new Date(order.createdAt).getHours()}:
                  {new Date(order.createdAt).getHours()}
                </b>
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
              <div className="col-3 ">
                <p>
                  Source: <b>{val.source}</b>
                </p>
              </div>
              <div className="col-3 ">
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
                <Link to={url}>
                  <button type="button">Order Summary</button>
                </Link>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  } else {
    return null;
  }
  // console.log(props.order);
};

export default OrderCard;
