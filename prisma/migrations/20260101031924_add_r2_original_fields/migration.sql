-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "originalKey" TEXT,
ADD COLUMN     "originalMime" TEXT,
ADD COLUMN     "originalName" TEXT,
ADD COLUMN     "originalSize" INTEGER;

-- CreateIndex
CREATE INDEX "Video_originalKey_idx" ON "Video"("originalKey");
