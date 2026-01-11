-- AlterTable
ALTER TABLE "Gallery" ADD COLUMN     "archivedAt" TIMESTAMP(3),
ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "archivedAt" TIMESTAMP(3),
ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "Gallery_archivedAt_idx" ON "Gallery"("archivedAt");

-- CreateIndex
CREATE INDEX "Gallery_deletedAt_idx" ON "Gallery"("deletedAt");

-- CreateIndex
CREATE INDEX "Video_archivedAt_idx" ON "Video"("archivedAt");

-- CreateIndex
CREATE INDEX "Video_deletedAt_idx" ON "Video"("deletedAt");
