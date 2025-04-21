/*
  Warnings:

  - You are about to alter the column `email` on the `AlertManagement` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to drop the column `so` on the `AnalDataSipuber` table. All the data in the column will be lost.
  - You are about to drop the column `so` on the `DailyDataSipuber` table. All the data in the column will be lost.
  - You are about to alter the column `device_name` on the `Device` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `no_modem` on the `Device` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to drop the column `so` on the `PpmDataSipuber` table. All the data in the column will be lost.
  - Added the required column `so2` to the `AnalDataSipuber` table without a default value. This is not possible if the table is not empty.
  - Added the required column `so2` to the `DailyDataSipuber` table without a default value. This is not possible if the table is not empty.
  - Added the required column `so2` to the `PpmDataSipuber` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AlertManagement" ALTER COLUMN "email" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "AnalDataSipuber" DROP COLUMN "so",
ADD COLUMN     "so2" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "DailyDataSipuber" DROP COLUMN "so",
ADD COLUMN     "so2" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Device" ALTER COLUMN "device_name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "no_modem" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "PpmDataSipuber" DROP COLUMN "so",
ADD COLUMN     "so2" DOUBLE PRECISION NOT NULL;
