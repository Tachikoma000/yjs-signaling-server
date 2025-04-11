#!/usr/bin/env node

import * as Y from 'yjs';
import { Server } from 'ws';
import http from 'http';
import { setupWSConnection } from 'y-websocket/bin/utils.js';

const PORT = process.env.PORT || 4444;

// Create an HTTP server
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Canvas Notes App Signaling Server\n');
});

// Create a WebSocket server attached to the HTTP server
const wss = new Server({ server });

wss.on('connection', (conn, req) => {
  const remoteAddress = req.socket.remoteAddress;
  console.log(`New connection from ${remoteAddress}`);
  
  // Setup connection with y-websocket
  setupWSConnection(conn, req, { gc: true });
  
  conn.on('close', () => {
    console.log(`Connection from ${remoteAddress} closed`);
  });
});

server.listen(PORT, () => {
  console.log(`Signaling server running on port ${PORT}`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server');
  wss.close(() => {
    console.log('WebSocket server closed');
    process.exit(0);
  });
});

console.log('Signaling server started');
