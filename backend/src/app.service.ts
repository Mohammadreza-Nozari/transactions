import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  getWelcome(): string {
    return 'The server is Running ...';
  }
}
