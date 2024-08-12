let receivedOrders = {};

export const filterRedundant = (order) => {
  const key = `${order.AppOrderID}-${order.price}-${order.triggerPrice}-${order.priceType}-${order.status}`;
  if (receivedOrders[key]) {
    return false;
  }
  receivedOrders[key] = order;
  return true;
};
