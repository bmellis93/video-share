export const runtime = "nodejs";

export async function GET() {
  return Response.json({
    hasDatabaseUrl: !!process.env.DATABASE_URL,
    hasDirectUrl: !!process.env.DIRECT_URL,
    nodeEnv: process.env.NODE_ENV,
  });
}