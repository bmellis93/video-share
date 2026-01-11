import { prisma } from "../lib/prisma";

async function main() {
  // Keep this minimal. Example:
  // await prisma.org.upsert({ ... })

  console.log("Seed complete.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });