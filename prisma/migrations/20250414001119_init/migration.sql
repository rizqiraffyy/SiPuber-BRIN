-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "email" TEXT,
    "no_telepon" TEXT NOT NULL,
    "image" TEXT,
    "password" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "device_name" TEXT NOT NULL,
    "nomor_modem" TEXT,
    "tanggal_paket" TIMESTAMP(3),
    "email" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sipuber" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "device_name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "pm1" DOUBLE PRECISION,
    "pm10" DOUBLE PRECISION,
    "pm25" DOUBLE PRECISION,
    "co" DOUBLE PRECISION,
    "so2" DOUBLE PRECISION,
    "no2" DOUBLE PRECISION,
    "o3" DOUBLE PRECISION,
    "nh3" DOUBLE PRECISION,
    "vbat" DOUBLE PRECISION,
    "device_id" INTEGER NOT NULL,

    CONSTRAINT "Sipuber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SipuberOlah" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "device_name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "pm1" DOUBLE PRECISION,
    "pm10" DOUBLE PRECISION,
    "pm25" DOUBLE PRECISION,
    "co" DOUBLE PRECISION,
    "so2" DOUBLE PRECISION,
    "no2" DOUBLE PRECISION,
    "o3" DOUBLE PRECISION,
    "nh3" DOUBLE PRECISION,
    "vbat" DOUBLE PRECISION,
    "aqi" INTEGER NOT NULL,
    "sipuber_id" INTEGER NOT NULL,

    CONSTRAINT "SipuberOlah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "contact_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sid" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Device_device_name_key" ON "Device"("device_name");

-- CreateIndex
CREATE INDEX "Device_user_id_idx" ON "Device"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Sipuber_device_name_key" ON "Sipuber"("device_name");

-- CreateIndex
CREATE INDEX "Sipuber_device_name_idx" ON "Sipuber"("device_name");

-- CreateIndex
CREATE INDEX "SipuberOlah_device_name_idx" ON "SipuberOlah"("device_name");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sid_key" ON "Session"("sid");

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sipuber" ADD CONSTRAINT "Sipuber_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SipuberOlah" ADD CONSTRAINT "SipuberOlah_sipuber_id_fkey" FOREIGN KEY ("sipuber_id") REFERENCES "Sipuber"("id") ON DELETE CASCADE ON UPDATE CASCADE;
