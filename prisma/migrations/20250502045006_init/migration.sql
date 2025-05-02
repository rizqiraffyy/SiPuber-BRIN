-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "full_name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" TEXT NOT NULL,
    "role" VARCHAR(20) NOT NULL,
    "isSoftDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" SERIAL NOT NULL,
    "device_name" VARCHAR(50) NOT NULL,
    "no_modem" VARCHAR(50),
    "tanggal_paket" TEXT,
    "isSoftDelete" BOOLEAN NOT NULL DEFAULT false,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsSetting" (
    "id" SERIAL NOT NULL,
    "thumbnail" TEXT,
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
    "so2" DOUBLE PRECISION NOT NULL,
    "no2" DOUBLE PRECISION NOT NULL,
    "o3" DOUBLE PRECISION NOT NULL,
    "nh3" DOUBLE PRECISION NOT NULL,
    "pm1" DOUBLE PRECISION NOT NULL,
    "pm25" DOUBLE PRECISION NOT NULL,
    "pm10" DOUBLE PRECISION NOT NULL,
    "high_params" VARCHAR(50) NOT NULL,
    "ispu_realtime" DOUBLE PRECISION NOT NULL,
    "v_bat" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PpmDataSipuber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyDataSipuber" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "location" TEXT NOT NULL,
    "co" DOUBLE PRECISION NOT NULL,
    "so2" DOUBLE PRECISION NOT NULL,
    "no2" DOUBLE PRECISION NOT NULL,
    "o3" DOUBLE PRECISION NOT NULL,
    "nh3" DOUBLE PRECISION NOT NULL,
    "pm1" DOUBLE PRECISION NOT NULL,
    "pm25" DOUBLE PRECISION NOT NULL,
    "pm10" DOUBLE PRECISION NOT NULL,
    "high_params" VARCHAR(50) NOT NULL,
    "ispu_daily" DOUBLE PRECISION NOT NULL,
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
    "so2" DOUBLE PRECISION NOT NULL,
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
    "email" VARCHAR(100) NOT NULL,

    CONSTRAINT "AlertManagement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataVehicle" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "location" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "golongan1" TEXT NOT NULL,
    "golongan2" TEXT NOT NULL,
    "golongan3" TEXT NOT NULL,

    CONSTRAINT "DataVehicle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Device_device_name_key" ON "Device"("device_name");

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PpmDataSipuber" ADD CONSTRAINT "PpmDataSipuber_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyDataSipuber" ADD CONSTRAINT "DailyDataSipuber_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalDataSipuber" ADD CONSTRAINT "AnalDataSipuber_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
