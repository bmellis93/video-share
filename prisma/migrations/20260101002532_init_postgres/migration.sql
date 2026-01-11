-- CreateEnum
CREATE TYPE "ShareView" AS ENUM ('VIEW_ONLY', 'REVIEW_DOWNLOAD');

-- CreateEnum
CREATE TYPE "CommentRole" AS ENUM ('OWNER', 'CLIENT');

-- CreateEnum
CREATE TYPE "CommentStatus" AS ENUM ('OPEN', 'RESOLVED');

-- CreateEnum
CREATE TYPE "VideoStatus" AS ENUM ('UPLOADED', 'PROCESSING', 'READY', 'FAILED');

-- CreateTable
CREATE TABLE "ShareLink" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "videoId" TEXT,
    "galleryId" TEXT,
    "title" TEXT,
    "allowedVideoIdsJson" TEXT,
    "stacksJson" TEXT,
    "view" "ShareView" NOT NULL DEFAULT 'REVIEW_DOWNLOAD',
    "allowComments" BOOLEAN NOT NULL DEFAULT true,
    "allowDownload" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    "contactId" TEXT,
    "conversationId" TEXT,

    CONSTRAINT "ShareLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "timecodeMs" INTEGER NOT NULL,
    "body" TEXT NOT NULL,
    "author" TEXT,
    "role" "CommentRole" NOT NULL DEFAULT 'CLIENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "parentId" TEXT,
    "status" "CommentStatus" NOT NULL DEFAULT 'OPEN',

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "thumbnailUrl" TEXT,
    "sourceUrl" TEXT NOT NULL,
    "status" "VideoStatus" NOT NULL DEFAULT 'UPLOADED',
    "muxAssetId" TEXT,
    "muxPlaybackId" TEXT,
    "playbackUrl" TEXT,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gallery" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "title" TEXT,
    "stacksJson" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GalleryVideo" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "galleryId" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "stackKey" TEXT,
    "version" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Org" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Org_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Installation" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT,
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Installation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppUser" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AppUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrgMember" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OrgMember_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShareLink_token_key" ON "ShareLink"("token");

-- CreateIndex
CREATE INDEX "ShareLink_token_idx" ON "ShareLink"("token");

-- CreateIndex
CREATE INDEX "ShareLink_orgId_idx" ON "ShareLink"("orgId");

-- CreateIndex
CREATE INDEX "Comment_token_createdAt_idx" ON "Comment"("token", "createdAt");

-- CreateIndex
CREATE INDEX "Comment_videoId_idx" ON "Comment"("videoId");

-- CreateIndex
CREATE INDEX "Comment_videoId_timecodeMs_idx" ON "Comment"("videoId", "timecodeMs");

-- CreateIndex
CREATE INDEX "Comment_parentId_createdAt_idx" ON "Comment"("parentId", "createdAt");

-- CreateIndex
CREATE INDEX "Comment_videoId_status_idx" ON "Comment"("videoId", "status");

-- CreateIndex
CREATE INDEX "Comment_orgId_idx" ON "Comment"("orgId");

-- CreateIndex
CREATE INDEX "Video_createdAt_idx" ON "Video"("createdAt");

-- CreateIndex
CREATE INDEX "Video_status_idx" ON "Video"("status");

-- CreateIndex
CREATE INDEX "Video_orgId_idx" ON "Video"("orgId");

-- CreateIndex
CREATE INDEX "Gallery_orgId_idx" ON "Gallery"("orgId");

-- CreateIndex
CREATE INDEX "GalleryVideo_galleryId_idx" ON "GalleryVideo"("galleryId");

-- CreateIndex
CREATE INDEX "GalleryVideo_videoId_idx" ON "GalleryVideo"("videoId");

-- CreateIndex
CREATE INDEX "GalleryVideo_galleryId_stackKey_version_idx" ON "GalleryVideo"("galleryId", "stackKey", "version");

-- CreateIndex
CREATE INDEX "GalleryVideo_orgId_idx" ON "GalleryVideo"("orgId");

-- CreateIndex
CREATE UNIQUE INDEX "GalleryVideo_galleryId_videoId_key" ON "GalleryVideo"("galleryId", "videoId");

-- CreateIndex
CREATE UNIQUE INDEX "Installation_orgId_key" ON "Installation"("orgId");

-- CreateIndex
CREATE INDEX "OrgMember_orgId_idx" ON "OrgMember"("orgId");

-- CreateIndex
CREATE INDEX "OrgMember_userId_idx" ON "OrgMember"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "OrgMember_orgId_userId_key" ON "OrgMember"("orgId", "userId");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GalleryVideo" ADD CONSTRAINT "GalleryVideo_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GalleryVideo" ADD CONSTRAINT "GalleryVideo_galleryId_fkey" FOREIGN KEY ("galleryId") REFERENCES "Gallery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Installation" ADD CONSTRAINT "Installation_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgMember" ADD CONSTRAINT "OrgMember_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgMember" ADD CONSTRAINT "OrgMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "AppUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
