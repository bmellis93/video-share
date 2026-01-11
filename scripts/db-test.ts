import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  const count = await prisma.gallery.count();
  console.log("gallery.count =", count);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });