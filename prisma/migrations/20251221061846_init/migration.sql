-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "token" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "timecodeMs" INTEGER NOT NULL,
    "body" TEXT NOT NULL,
    "author" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "parentId" TEXT,
    CONSTRAINT "Comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Comment" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Comment_token_createdAt_idx" ON "Comment"("token", "createdAt");

-- CreateIndex
CREATE INDEX "Comment_videoId_idx" ON "Comment"("videoId");

-- CreateIndex
CREATE INDEX "Comment_videoId_timecodeMs_idx" ON "Comment"("videoId", "timecodeMs");

-- CreateIndex
CREATE INDEX "Comment_parentId_createdAt_idx" ON "Comment"("parentId", "createdAt");
