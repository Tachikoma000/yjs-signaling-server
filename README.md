# Canvas Notes App WebSocket Server

A collaboration server for the Canvas Notes App built with y-websocket.

## Purpose

This server enables real-time collaboration in the Canvas Notes App by:
- Synchronizing document changes between users
- Facilitating connections between users on different networks
- Providing a reliable communication channel for real-time collaboration
- Supporting both WebRTC signaling and direct WebSocket connections

## Deployment

This server is designed to be deployed on [Render.com](https://render.com):

1. Create a new Web Service on Render
2. Connect to this GitHub repository
3. Set the following configuration:
   - Environment: Node.js
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: Free
   - Environment Variables: None required

The service will be available at a URL like `https://canvas-notes-signaling-server.onrender.com`

### Node Version Note

This server requires Node.js version between 16.x and 18.x (as specified in the package.json `engines` field).

## Local Development

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. The server will run on port 4444 by default

## Environment Variables

- `PORT` - The port to run the server on (defaults to 4444)
