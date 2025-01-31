import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for HTTP requests
  app.enableCors({
    origin: 'http://localhost:5173', // Change this to your frontend URL
    credentials: true,
  });

  // Enable CORS for WebSockets
  app.useWebSocketAdapter(new IoAdapter(app));

  // Use global validation pipes

  await app.listen(3000);
}
bootstrap();
