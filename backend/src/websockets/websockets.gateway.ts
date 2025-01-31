import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ITransaction } from 'interfaces/ITransaction';
import { Server, Socket } from 'socket.io';
import { faker } from '@faker-js/faker';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:5173', // Set the frontend URL allowed to connect to this WebSocket server
    credentials: true, // Allow sending credentials (cookies, authorization headers)
  },
})
export class WebsocketsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() // Injects the WebSocket server instance
  server: Server;

  constructor() {}

  // Generates a random date between the given start and end dates, returning it in YYYY-MM-DD format
  getRandomDate(start = new Date(2000, 0, 1), end = new Date()) {
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    );
    return randomDate.toISOString().split('T')[0]; // Extracts YYYY-MM-DD from the ISO string
  }

  // Initial set of transactions for testing
  private transactions: ITransaction[] = [
    {
      id: faker.string.uuid(),
      to: faker.person.fullName(),
      amount: 100,
      currency: 'USD',
      status: 'Pending',
      date: this.getRandomDate(),
    },
    {
      id: faker.string.uuid(),
      to: faker.person.fullName(),
      amount: 250,
      currency: 'EUR',
      status: 'Approved',
      date: this.getRandomDate(),
    },
  ];

  // Called once the WebSocket server is initialized
  afterInit(server: Server) {
    console.log('WebSocket Server Initialized');
    this.simulateNewTransactions(); // Start simulating new transactions every 30 seconds
  }

  // Handles new WebSocket connection
  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
    client.emit('initialTransactions', this.transactions); // Send existing transactions when a client connects
  }

  // Handles WebSocket disconnection
  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  // Updates the status of a transaction and notifies all connected clients
  @SubscribeMessage('updateTransactionStatus')
  handleUpdateStatus(
    @MessageBody() data: { id: string; status: 'Pending' | 'Approved' }, // Data structure for updating transaction status
  ) {
    const transaction = this.transactions.find((t) => t.id === data.id); // Find the transaction by ID
    if (transaction) {
      transaction.status = data.status; // Update the status of the found transaction
      this.server.emit('transactionUpdated', transaction); // Notify all clients about the updated transaction
    }
  }

  // Simulates new transactions every 30 seconds and sends them to all connected clients
  private simulateNewTransactions() {
    let idCounter = this.transactions.length + 1; // Start the ID counter from the current length of transactions
    setInterval(() => {
      const newTransaction: ITransaction = {
        id: faker.string.uuid(), // Generate a random UUID for the transaction
        to: faker.person.fullName(), // Generate a random full name for the recipient
        amount: Math.floor(Math.random() * 500), // Random transaction amount between 0 and 500
        currency: ['USD', 'EUR', 'GBP'][Math.floor(Math.random() * 3)], // Random currency from USD, EUR, GBP
        status: 'Pending', // Initial status is "Pending"
        date: this.getRandomDate(), // Generate a random date for the transaction
      };

      this.transactions.unshift(newTransaction); // Add the new transaction at the start of the array
      this.server.emit('newTransaction', newTransaction); // Emit the new transaction to all clients
    }, 30000); // Create a new transaction every 30 seconds
  }
}
