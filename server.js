const { WebSocketServer } = require('ws')
const http = require('http')
const { setupWSConnection } = require('y-webrtc/bin/utils')

// Create an HTTP server
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Y-WebRTC Signaling Server for Canvas Notes App\n')
})

// Create a WebSocket server
const wss = new WebSocketServer({ server })

// Handle WebSocket connections
wss.on('connection', (conn, req) => {
  console.log(`New connection established from ${req.socket.remoteAddress}`)
  
  // Set up connection with y-webrtc
  setupWSConnection(conn, req)
  
  conn.on('close', () => {
    console.log('Connection closed')
  })
})

// Set up error handling
wss.on('error', (error) => {
  console.error('WebSocket server error:', error)
})

// Listen on the specified port or default to 4444
const PORT = process.env.PORT || 4444
server.listen(PORT, () => {
  console.log(`Signaling server running on port ${PORT}`)
})

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server')
  wss.close(() => {
    console.log('WebSocket server closed')
    process.exit(0)
  })
})
