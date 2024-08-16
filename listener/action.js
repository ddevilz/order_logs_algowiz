export const determineAction = (order) => {
  if (order.priceType === "MKT" && order.status === "complete") {
    return "placeOrder";
  } else if (order.priceType === "LMT" && order.status === "open") {
    return "placeOrder";
  } else if (
    (order.priceType === "SL-LMT" || order.priceType === "SL-MKT") &&
    order.status === "pending"
  ) {
    return "placeOrder";
  } else if (order.status === "cancelled") {
    return "cancelOrder";
  } else {
    return "modifyOrder";
  }
};
