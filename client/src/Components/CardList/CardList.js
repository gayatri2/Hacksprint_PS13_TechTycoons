import React from 'react';
import OrderCard from '../OrderCard/OrderCard'

const CardList = props => {
    // const cardsArray = orders.map(order => (
    //   <OrderCard
    //     restaurant_id={order.restaurant_id}
    //     total_cost={order.email}
    //     id={order._id}
    //     source={order.source}
    //     status={order.status}
    //     delivery_boy={order.delivery_boy}
    //     createdAt={order.createdAt}
    //      />
    // ));
  console.log(props.orders)
    return (
      <div>
       {props.orders.map(orderObj => (<OrderCard key={orderObj._id} orderObj= {orderObj} /> ) )}
      </div>
    );
};
export default CardList