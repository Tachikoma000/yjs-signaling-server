# Canvas Notes App Signaling Server

A WebRTC signaling server for the Canvas Notes App built with y-webrtc.

## Purpose

This server facilitates WebRTC connections between users of the Canvas Notes App by:
- Helping peers discover each other 
- Exchanging connection information between peers
- Enabling reliable connections across different networks

## Deployment

This server is designed to be deployed on [Render.com](https://render.com):

1. Create a new Web Service on Render
2. Connect to this GitHub repository
3. Set the following configuration:
   - Environment: Node.js
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: Free

The service will be available at a URL like `https://canvas-notes-signaling-server.onrender.com`

## Local Development

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. The server will run on port 4444 by default

## Environment Variables

- `PORT` - The port to run the server on (defaults to 4444)
