-- CreateEnum
CREATE TYPE "EnumSkuSkuType" AS ENUM ('Item', 'Package');

-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "roles" TEXT[],
    "uid" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sku" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fulfillmentInfo" JSONB,
    "id" TEXT NOT NULL,
    "packagesId" TEXT,
    "skuDescription" TEXT,
    "skuId" TEXT,
    "skuName" TEXT,
    "skuType" "EnumSkuSkuType",
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sku_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkuPackage" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "skuId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SkuPackage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_uid_key" ON "User"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Sku" ADD CONSTRAINT "Sku_packagesId_fkey" FOREIGN KEY ("packagesId") REFERENCES "SkuPackage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkuPackage" ADD CONSTRAINT "SkuPackage_skuId_fkey" FOREIGN KEY ("skuId") REFERENCES "Sku"("id") ON DELETE SET NULL ON UPDATE CASCADE;
