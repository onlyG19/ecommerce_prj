import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
    @Post()
    create(@Body() createProductDto: CreateProductDto) {
      return this.productsService.create(createProductDto);
    }
  
    @Get()
    async getAllProducts(): Promise<Product[]> {
      return this.productsService.findAll();  // Llama al servicio que obtiene todos los productos
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.productsService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() data) {
      return this.productsService.update(id, data);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.productsService.remove(id);
    }
}
