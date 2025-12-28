-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "token" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "timecodeMs" INTEGER NOT NULL,
    "body" TEXT NOT NULL,
    "author" TEXT,
    "role" TEXT NOT NULL DEFAULT 'CLIENT',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "parentId" TEXT,
    CONSTRAINT "Comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Comment" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Comment" ("author", "body", "createdAt", "id", "parentId", "timecodeMs", "token", "videoId") SELECT "author", "body", "createdAt", "id", "parentId", "timecodeMs", "token", "videoId" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
CREATE INDEX "Comment_token_createdAt_idx" ON "Comment"("token", "createdAt");
CREATE INDEX "Comment_videoId_idx" ON "Comment"("videoId");
CREATE INDEX "Comment_videoId_timecodeMs_idx" ON "Comment"("videoId", "timecodeMs");
CREATE INDEX "Comment_parentId_createdAt_idx" ON "Comment"("parentId", "createdAt");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
