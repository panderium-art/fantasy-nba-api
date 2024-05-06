// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Create 10 users
  for (let i = 0; i < 10; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: faker.internet.password(), // Remember to hash passwords in real applications
      },
    });
  }

  // Create 10 teams
  for (let i = 0; i < 10; i++) {
    await prisma.team.create({
      data: {
        team_name: faker.company.name(),
        wins: faker.number.int({max: 82}),
        losses: faker.number.int({max: 82}),
        home_city: faker.location.city(),
        home_arena: faker.company.name(),
        championships_amount: faker.number.int({max: 10}),
        win_loss_ratio: faker.number.float({ min: 0, max: 82 }),
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });