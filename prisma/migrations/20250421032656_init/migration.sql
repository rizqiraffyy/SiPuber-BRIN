/*
  Warnings:

  - You are about to drop the column `created_at` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `latitude` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `nomor_modem` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the `Contact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sipuber` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SipuberOlah` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `Device` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Sipuber" DROP CONSTRAINT "Sipuber_device_id_fkey";

-- DropForeignKey
ALTER TABLE "SipuberOlah" DROP CONSTRAINT "SipuberOlah_sipuber_id_fkey";

-- DropIndex
DROP INDEX "Device_device_name_key";

-- DropIndex
DROP INDEX "Device_user_id_idx";

-- AlterTable
ALTER TABLE "Device" DROP COLUMN "created_at",
DROP COLUMN "email",
DROP COLUMN "latitude",
DROP COLUMN "longitude",
DROP COLUMN "nomor_modem",
DROP COLUMN "updated_at",
ADD COLUMN     "no_modem" TEXT,
ALTER COLUMN "tanggal_paket" SET DATA TYPE TEXT,
DROP COLUMN "user_id",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Contact";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "Sipuber";

-- DropTable
DROP TABLE "SipuberOlah";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "isSoftDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsSetting" (
    "id" SERIAL NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "CmsSetting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PpmDataSipuber" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "device_id" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "co" DOUBLE PRECISION NOT NULL,
    "so" DOUBLE PRECISION NOT NULL,
    "no2" DOUBLE PRECISION NOT NULL,
    "o3" DOUBLE PRECISION NOT NULL,
    "nh3" DOUBLE PRECISION NOT NULL,
    "pm1" DOUBLE PRECISION NOT NULL,
    "pm25" DOUBLE PRECISION NOT NULL,
    "pm10" DOUBLE PRECISION NOT NULL,
    "ispu_realtime" INTEGER NOT NULL,
    "v_bat" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PpmDataSipuber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyDataSipuber" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "location" TEXT NOT NULL,
    "co" DOUBLE PRECISION NOT NULL,
    "so" DOUBLE PRECISION NOT NULL,
    "no2" DOUBLE PRECISION NOT NULL,
    "o3" DOUBLE PRECISION NOT NULL,
    "nh3" DOUBLE PRECISION NOT NULL,
    "pm1" DOUBLE PRECISION NOT NULL,
    "pm25" DOUBLE PRECISION NOT NULL,
    "pm10" DOUBLE PRECISION NOT NULL,
    "ispu_daily" INTEGER NOT NULL,
    "device_id" INTEGER NOT NULL,

    CONSTRAINT "DailyDataSipuber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalDataSipuber" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "device_id" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "co" DOUBLE PRECISION NOT NULL,
    "so" DOUBLE PRECISION NOT NULL,
    "no2" DOUBLE PRECISION NOT NULL,
    "o3" DOUBLE PRECISION NOT NULL,
    "nh3" DOUBLE PRECISION NOT NULL,
    "pm1" DOUBLE PRECISION NOT NULL,
    "pm25" DOUBLE PRECISION NOT NULL,
    "pm10" DOUBLE PRECISION NOT NULL,
    "v_bat" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "AnalDataSipuber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlertManagement" (
    "id" SERIAL NOT NULL,
    "wa_name" TEXT NOT NULL,
    "wa_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "AlertManagement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PpmDataSipuber" ADD CONSTRAINT "PpmDataSipuber_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyDataSipuber" ADD CONSTRAINT "DailyDataSipuber_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalDataSipuber" ADD CONSTRAINT "AnalDataSipuber_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
