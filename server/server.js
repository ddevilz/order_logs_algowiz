import {WebSocketServer} from 'ws';
import { orders } from './orders.js';
import { sendOrderUpdates } from './utils.js';

const wss = new WebSocketServer({ port: 8765 });

wss.on('connection', (ws) => {
  console.log('Client connected');
  sendOrderUpdates(ws, orders).catch(console.error);
});

console.log('WebSocket server running on ws://localhost:8765');
