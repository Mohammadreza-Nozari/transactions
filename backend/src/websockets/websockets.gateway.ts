import { OnApplicationShutdown } from '@nestjs/common';
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
    origin: 'http://localhost:5173', // Change this to your frontend URL
    credentials: true,
  },
})
export class WebsocketsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  constructor() {}

  getRandomDate(start = new Date(2000, 0, 1), end = new Date()) {
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    );
    return randomDate.toISOString().split('T')[0]; // Extracts YYYY-MM-DD
  }

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

  afterInit(server: Server) {
    console.log('WebSocket Server Initialized');
    this.simulateNewTransactions();
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
    client.emit('initialTransactions', this.transactions); // Send existing transactions on connect
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('updateTransactionStatus')
  handleUpdateStatus(
    @MessageBody() data: { id: string; status: 'Pending' | 'Approved' },
  ) {
    const transaction = this.transactions.find((t) => t.id === data.id);
    if (transaction) {
      transaction.status = data.status;
      this.server.emit('transactionUpdated', transaction); // Notify all clients
    }
  }

  private simulateNewTransactions() {
    let idCounter = this.transactions.length + 1;
    setInterval(() => {
      const newTransaction: ITransaction = {
        id: faker.string.uuid(),
        to: faker.person.fullName(),
        amount: Math.floor(Math.random() * 500),
        currency: ['USD', 'EUR', 'GBP'][Math.floor(Math.random() * 3)],
        status: 'Pending',
        date: this.getRandomDate(),
      };

      this.transactions.unshift(newTransaction);
      this.server.emit('newTransaction', newTransaction); // Send new transaction to all clients
    }, 30000); // Add a new transaction every 5 seconds
  }
}
