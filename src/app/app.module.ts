/* DEV 
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from '../comments/comments.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CommentsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'default_username',
      password: process.env.DB_PASSWORD || 'default_password',
      database: process.env.DB_DATABASE || 'default_database',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
*/

/* PROD */

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from '../comments/comments.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Permite o uso de variáveis de ambiente globalmente
    }),
    CommentsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // URL completa fornecida pelo Render
      ssl: {
        rejectUnauthorized: false, // Necessário para conexões seguras no Render
      },
      autoLoadEntities: true,
      synchronize: true, // Use com cuidado em produção; ideal desativar depois de criar o schema
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
