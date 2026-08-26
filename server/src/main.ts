import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from "cookie-parser";

async function start() {
  const PORT = process.env.PORT ?? 3000

  const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS
      .split(",")
      .map((origin) => origin.trim())
      .filter(Boolean)
  : [
      "http://localhost:3001",
      "http://localhost:5173",
    ];


  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
  });
  app.use(cookieParser())
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  await app.listen(PORT, () => console.log(`App started on port ${PORT}`));
}

start();
