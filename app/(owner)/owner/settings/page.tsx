// app/owner/settings/page.tsx
import { requireOwnerContext } from "@/lib/auth/ownerSession";
import SettingsScreen from "@/components/owner/SettingsScreen";

export default async function OwnerSettingsPage() {
  const owner = await requireOwnerContext(); // protects route
  return <SettingsScreen orgId={owner.orgId} />;
}