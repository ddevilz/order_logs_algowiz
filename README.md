# WebSocket Server and Listener

## Overview

This project consists of a WebSocket server and a WebSocket listener, implemented in Node.js. The server sends order updates to the listener, which processes these updates, filters out duplicates, and logs the activities. The listener also determines actions based on the order details and sends updates accordingly.

## Prerequisites

- Node.js (v18 or higher)
- npm (Node Package Manager)

## Project Structure

- `server/`
  - `server.js`: WebSocket server implementation.
- `listener/`
  - `listener.js`: WebSocket listener implementation.
- `package.json`: Contains scripts and dependencies.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ddevilz/order_logs_algowiz.git
    cd order_logs_algowiz
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Usage

### Starting the Server and Listener

To start both the WebSocket server and listener, use the following command:

```bash
npm start
```

This command will run the WebSocket server and listener in parallel.

### Starting the Server Only

To start only the WebSocket server, use:

```bash
npm run start:server
```

### Starting the Listener Only

To start only the WebSocket listener, use:

```bash
npm run start:listener
```
