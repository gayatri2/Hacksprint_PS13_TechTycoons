const reducer = (orders = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...orders, action.payload];
    case "DELETE":
      return orders.filter((order) => order._id !== action.payload);
    default:
      return orders;
  }
};

export default reducer;
