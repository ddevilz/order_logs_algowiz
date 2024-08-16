import WebSocket from "ws";
import { filterRedundant } from "./filter.js";
import { determineAction } from "./action.js";
import { aggregateUpdates } from "./aggregator.js";

const ws = new WebSocket("ws://localhost:8765");

ws.on("message", (message) => {
  const order = JSON.parse(message);

  if (!filterRedundant(order)) {
    console.log(`Filtered redundant update: ${JSON.stringify(order)}`);
    return;
  }

  const action = determineAction(order);
  console.log(`Action: ${action} for order ${order.AppOrderID}`);

  const latestUpdate = aggregateUpdates(order);

  if (latestUpdate) {
    console.log(`Sending aggregated update: ${JSON.stringify(latestUpdate)}`);
  }
});

ws.on("open", () => {
  console.log("Connected to WebSocket server");
});

ws.on("close", () => {
  console.log("Disconnected from WebSocket server");
});
