-- CreateTable
CREATE TABLE "products_table" (
    "id" TEXT NOT NULL,
    "prodTitle" TEXT NOT NULL,
    "prodDescription" TEXT NOT NULL,
    "unitsLeft" INTEGER NOT NULL,
    "pricePerUnit" DOUBLE PRECISION NOT NULL,
    "isOnOffer" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_table_pkey" PRIMARY KEY ("id")
);
