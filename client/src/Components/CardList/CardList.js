import React from 'react';
import OrderCard from '../OrderCard/OrderCard'

const CardList = ({ orders }) => {
    const cardsArray = orders.map(order => (
      <Card
        name={order.name}
        email={order.email}
        id={order.id} />
    ));
  
    return (
      <div>
        {cardsArray}
      </div>
    );
};
export default CardList