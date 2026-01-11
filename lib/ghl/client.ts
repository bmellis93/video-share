import "server-only";
import { prisma } from "@/lib/prisma";

export async function getGhlAccessToken(orgId: string) {
  const inst = await prisma.installation.findUnique({
    where: { orgId },
    select: { accessToken: true },
  });
  if (!inst) throw new Error(`No GHL installation found for org ${orgId}`);
  if (!inst.accessToken) throw new Error(`GHL installation missing access token for org ${orgId}`);
  return inst.accessToken;
}

export function ghlHeaders(accessToken: string) {
  return Object.freeze({
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
    Accept: "application/json",
    Version: "2021-07-28",
  });
}