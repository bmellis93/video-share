// app/login/page.tsx
export default function LoginPage({
  searchParams,
}: {
  searchParams: { next?: string };
}) {
  const next = encodeURIComponent(searchParams?.next ?? "/owner/galleries");

  return (
    <main className="min-h-[100dvh] grid place-items-center bg-neutral-950 text-white">
      <div className="w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
        <h1 className="text-lg font-semibold">Sign in</h1>
        <p className="mt-1 text-sm text-neutral-300">
          Connect your HighLevel account to continue.
        </p>

        <a
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-200"
          href="/api/auth/oauth/start?next=/owner/galleries"
        >
          Connect HighLevel
        </a>
      </div>
    </main>
  );
}