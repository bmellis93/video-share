/*
  Warnings:

  - You are about to drop the column `id` on the `GalleryVideo` table. All the data in the column will be lost.
  - You are about to drop the column `orgId` on the `GalleryVideo` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "GalleryVideo_orgId_idx";

-- AlterTable
ALTER TABLE "GalleryVideo" DROP COLUMN "id",
DROP COLUMN "orgId",
ADD CONSTRAINT "GalleryVideo_pkey" PRIMARY KEY ("galleryId", "videoId");

-- DropIndex
DROP INDEX "GalleryVideo_galleryId_videoId_key";

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "ShareLink" ADD CONSTRAINT "ShareLink_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gallery" ADD CONSTRAINT "Gallery_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE CASCADE ON UPDATE CASCADE;
