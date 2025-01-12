/*
  Warnings:

  - Changed the type of `category` on the `Restaurant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "StoreCategory" AS ENUM ('SUSHI', 'UNAGI', 'TEMPURA', 'TONKATSU', 'YAKITORI', 'SUKIYAKI', 'SOBA', 'RAMEN', 'YAKISOBA', 'OKONOMIYAKI', 'DONBURI', 'ODEN', 'KAISEKI', 'HAMBAGU', 'TEPPANYAKI', 'CURRY', 'YAKINIKU', 'NABE', 'CAFE', 'IZAKAYA', 'OTHER');

-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "category",
ADD COLUMN     "category" "StoreCategory" NOT NULL;
