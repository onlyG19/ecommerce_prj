import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @ApiProperty({ description: 'El nombre del producto', type: String })
  name: string;

  @IsNumber()
  @ApiProperty({ description: 'El precio del producto', type: Number })
  price: number;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Descripción del producto',
    required: false,  // El campo es opcional
    type: String, // Datatype
  })
  description?: string;
}
