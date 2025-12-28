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

  // include ALL allowed ids (including stacked children)
  allowedVideoIds: string[];

  // stack parent -> ordered version ids
  stacks: StackMap;
};