import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // 🔥 Habilitar CORS para permitir peticiones desde el frontend


  const config = new DocumentBuilder()
    .setTitle('Ecommerce API')
    .setDescription('API de productos')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
