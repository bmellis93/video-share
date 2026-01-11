import "dotenv/config";
import { prisma } from "../lib/prisma";
import { randomUUID } from "crypto";

async function main() {
  const orgId = randomUUID();

  const org = await prisma.org.create({
    data: {
      id: orgId,
      name: "Test Org",
    },
  });

  const v = await prisma.video.create({
    data: {
      orgId: org.id,
      title: "Test 1",
      sourceUrl: "https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4",
      status: "UPLOADED",
    },
  });

  console.log("Created org:", org.id);
  console.log("Created video:", v.id);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());