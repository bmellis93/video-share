-- CreateTable
CREATE TABLE "ShareLink" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "token" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" DATETIME,
    "allowComments" BOOLEAN NOT NULL DEFAULT true,
    "allowDownload" BOOLEAN NOT NULL DEFAULT false,
    "contactId" TEXT,
    "conversationId" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "ShareLink_token_key" ON "ShareLink"("token");
