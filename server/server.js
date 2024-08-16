import { WebSocketServer } from "ws";
import { orders } from "./orders.js";
import { sendOrderUpdates } from "./utils.js";

const ws = new WebSocketServer({ port: 8765 });

ws.on("connection", (ws) => {
  console.log("Client connected");
  sendOrderUpdates(ws, orders).catch(console.error);
});

console.log("WebSocket server running on ws://localhost:8765");
