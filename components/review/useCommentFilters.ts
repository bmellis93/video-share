"use client";

import { useEffect, useMemo, useState } from "react";

export type ClientFilterKey = "MY" | "OWNER";
export type OwnerFilterKey = "ALL" | "OPEN" | "RESOLVED";

export type FilterOption<K extends string> = { key: K; label: string };

export type CommentRole = "OWNER" | "CLIENT";
export type CommentStatus = "OPEN" | "RESOLVED";

export type FilterableComment = {
  role?: CommentRole;
  status?: CommentStatus;
  parentId: string | null; // needed so we can reliably treat roots vs replies
};

const CLIENT_FILTERS: FilterOption<ClientFilterKey>[] = [
  { key: "MY", label: "My comments" },
  { key: "OWNER", label: "Owner comments" },
];

const OWNER_FILTERS: FilterOption<OwnerFilterKey>[] = [
  { key: "ALL", label: "All" },
  { key: "OPEN", label: "Open" },
  { key: "RESOLVED", label: "Resolved" },
];

export function useCommentFilters<T extends FilterableComment>(opts: {
  isToken: boolean;
  comments: T[];
}) {
  const { isToken, comments } = opts;

  const filters = useMemo(
    () => (isToken ? CLIENT_FILTERS : OWNER_FILTERS),
    [isToken]
  );

  const [filterOpen, setFilterOpen] = useState(false);

  // Keep the key type aligned to mode (token vs owner)
  const [filterKey, setFilterKey] = useState<ClientFilterKey | OwnerFilterKey>(
    isToken ? "MY" : "ALL"
  );

  useEffect(() => {
    // Reset key when mode changes so it never becomes invalid
    setFilterKey(isToken ? "MY" : "ALL");
    setFilterOpen(false);
  }, [isToken]);

  const visibleComments = useMemo(() => {
    // Only filter *root* comments here. Replies stay attached via your threaded render.
    const roots = comments.filter((c) => c.parentId === null);

    if (isToken) {
      const key = filterKey as ClientFilterKey;

      if (key === "OWNER") {
        return roots.filter((c) => (c.role ?? "CLIENT") === "OWNER");
      }

      // "MY" (client) = anything not OWNER
      return roots.filter((c) => (c.role ?? "CLIENT") !== "OWNER");
    }

    const key = filterKey as OwnerFilterKey;

    if (key === "OPEN") {
      return roots.filter((c) => (c.status ?? "OPEN") === "OPEN");
    }
    if (key === "RESOLVED") {
      return roots.filter((c) => (c.status ?? "OPEN") === "RESOLVED");
    }

    return roots; // ALL
  }, [comments, isToken, filterKey]);

  return {
    filters,
    filterOpen,
    setFilterOpen,
    filterKey,
    setFilterKey,
    visibleComments,
  };
}