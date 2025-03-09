import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  await prisma.product.createMany({
    data: [
      {
        name: 'Smartphone Pro X',
        description: 'Un smartphone de última generación con pantalla OLED.',
        price: 799.99,
      },
      {
        name: 'Laptop Ultra 2024',
        description: 'Laptop potente con procesador de última generación.',
        price: 1299.99,
      },
    ],
  });

  console.log('✅ Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
