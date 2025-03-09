import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from '../prisma.service'; // Importa PrismaService

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService],  // Agrega PrismaService aquí, dentro del ProductsModule
})
export class ProductsModule {}
