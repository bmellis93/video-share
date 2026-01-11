import type { StackMap } from "@/components/domain/stacks";

export type SharePermissions = {
  view: "VIEW_ONLY" | "REVIEW_DOWNLOAD";
  allowComments: boolean;
  allowDownload: boolean;
};

export type SharePayload = {
  shareId: string;
  title: string;
  permissions: SharePermissions;
  allowedVideoIds: string[];
  stacks: StackMap;

  // optional future fields
  // createdAt?: string;
  // expiresAt?: string;
};