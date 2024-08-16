import moment from "moment";

const sendUpdatesBatch = async (ws, orders, count, delay) => {
  for (let i = 0; i < count; i++) {
    const order = {
      ...orders[i % orders.length],
      timestamp: moment().toISOString(),
    };
    ws.send(JSON.stringify(order));
    console.log(`Sent: ${JSON.stringify(order)}`);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
};

export const sendOrderUpdates = async (ws, orders) => {
  await sendUpdatesBatch(ws, orders, 10, 100);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await sendUpdatesBatch(ws, orders, 20, 100);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await sendUpdatesBatch(ws, orders, 40, 75);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  await sendUpdatesBatch(ws, orders, 30, 166);
};
