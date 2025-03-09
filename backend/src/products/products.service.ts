import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';  // Importa PrismaService
import { Prisma, Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}  // Inyecta PrismaService

  // Crear un nuevo producto
  async create(data: Prisma.ProductCreateInput) {
    return this.prisma.product.create({ data });
  }

  // Obtener todos los productos
  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();  // Obtén todos los productos usando Prisma
  }

  // Obtener un producto por ID
  async findOne(id: string): Promise<Product | null> {
    return this.prisma.product.findUnique({ where: { id } });
  }

  // Actualizar un producto
  async update(id: string, data: Prisma.ProductUpdateInput): Promise<Product> {
    return this.prisma.product.update({ where: { id }, data });
  }

  // Eliminar un producto
  async remove(id: string): Promise<Product> {
    return this.prisma.product.delete({ where: { id } });
  }
}
