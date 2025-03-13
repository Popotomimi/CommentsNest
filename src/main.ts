/* 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
*/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do CORS
  app.enableCors({
    origin: [
      'http://localhost:5173', // Frontend local
      'https://popotomimi.netlify.app', // URL hospedada no Netlify
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
    credentials: true, // Permite credenciais como cookies
  });

  await app.listen(process.env.PORT ?? 3000); // Porta dinâmica ou padrão (3000)
}
bootstrap();
