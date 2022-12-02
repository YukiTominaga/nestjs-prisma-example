import * as process from 'process';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.user.upsert({
    where: { name: 'Knights of the Round' },
    update: {},
    create: {
      name: 'Knights of the Round',
      description: '我は人にして神',
    },
  });

  const post2 = await prisma.user.upsert({
    where: { name: 'Yuki Tominaga' },
    update: {},
    create: {
      name: 'Yuki Tominaga',
      description: 'ほげほげ',
    },
  });

  console.log({ post1, post2 });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
