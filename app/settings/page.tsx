import ThemeToggle from "./theme-toggle";

export default function SettingsPage() {
  // Later: add auth/guard so only owner can access this route.
  return (
    <main className="min-h-[100dvh] bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="mx-auto max-w-xl p-6">
        <h1 className="text-xl font-semibold">Settings</h1>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          This only affects your view on this device.
        </p>

        <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
          <ThemeToggle />
        </div>
      </div>
    </main>
  );
}