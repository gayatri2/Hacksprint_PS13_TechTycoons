import React from "react";
import OrderCard from "../OrderCard/CompletedOrderCard";

const CardList = (props) => {
  console.log(props.orders);

  const { orders } = props;

  if (orders.length > 0) {
    return orders.map((item, index) => {
      console.log(item.source);
      return <OrderCard order={item} orderIndex={index} />;
    });
  } else {
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );
  }
};
export default CardList;
