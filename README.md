# Full-Stack Transaction Management Application

## Features

- Sign In
- Dashboard
- DataTables
- Error Pages
- Light & Dark Mode
- Error Handling
- Network Connection Check
- Responsive Design
- Transaction Page
- WebSocket
- Redux State Management

## Tech Stack

**Client:** TypeScript, React, React Redux, RTK Query, ShadcnUI, Formik, Yup, WebSocket  
**API:** NestJS with WebSocket support

## Deployment

### Package Installation

bash

CopyEdit

`yarn start`

### Running with Development Server

bash

CopyEdit

`yarn dev`

### Building Production

bash

CopyEdit

`yarn build`

## NestJS WebSocket Transaction Project

This project is a NestJS application that uses WebSockets to simulate and manage transactions in real-time. It broadcasts transaction updates and new transactions to connected clients. Clients can also update the status of existing transactions through WebSocket messages.

### Features

- **WebSocket Server**: Real-time communication between clients and server.
- **Transaction Simulation**: Simulates new transactions every 30 seconds.
- **Transaction Updates**: Allows clients to update the status of transactions (Pending/Approved).
- **CORS Support**: Allows frontend applications (like React or Vue.js) to connect securely.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (preferably v14 or higher)
- npm or yarn package manager installed

### Installation

1.  Clone this repository:

    bash

    CopyEdit

    `git clone https://github.com/yourusername/nestjs-websocket-transaction.git cd nestjs-websocket-transaction`

2.  Install dependencies:

    bash

    CopyEdit

    `npm install # or yarn install`

3.  Set up environment variables if required (e.g., database or API keys). For now, no environment-specific setup is needed.

### Running the Application

1.  To start the NestJS server, run the following command:

    bash

    CopyEdit

    `npm run start # or yarn start`

2.  The server will start and listen on port 3000 by default.
3.  Open your browser or WebSocket client and connect to:

    arduino

    CopyEdit

    `ws://localhost:3000`

### WebSocket Events

- **initialTransactions**: Sends the initial list of transactions when a client connects.
- **newTransaction**: Sends a new transaction every 30 seconds to all connected clients.
- **transactionUpdated**: Sent to all clients when a transaction's status is updated.

### Update Transaction Status

Clients can send the following message to update the status of a transaction:

json

CopyEdit

`{ "id": "transaction-id", "status": "Pending" } // or "Approved"`

The project mainly focuses on WebSocket communication. However, if you need to build additional HTTP endpoints, they can be added easily in the `AppController` or other controllers.

### Testing

You can test the WebSocket server using tools like **Postman**, **WebSocket Client**, or create your own frontend app to interact with the WebSocket API.

### Contributing

1.  Fork this repository
2.  Create a new branch (`git checkout -b feature/your-feature-name`)
3.  Commit your changes (`git commit -am 'Add new feature'`)
4.  Push to the branch (`git push origin feature/your-feature-name`)
5.  Create a new Pull Request

### License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Let me know if you need further adjustments!
