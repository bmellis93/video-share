import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { r2, getR2Bucket } from "@/lib/r2";

export async function deleteFromR2(key: string) {
  const bucket = getR2Bucket();
  await r2.send(
    new DeleteObjectCommand({
      Bucket: bucket,
      Key: key,
    })
  );
}