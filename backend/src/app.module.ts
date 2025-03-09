import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module'; // Mantén la importación del ProductsModule

@Module({
  imports: [ProductsModule], // Solo importa ProductsModule aquí
  controllers: [AppController],
  providers: [AppService], // No es necesario agregar PrismaService aquí, ya que se maneja dentro del ProductsModule
})
export class AppModule {}
