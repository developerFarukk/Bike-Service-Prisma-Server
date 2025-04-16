-- CreateTable
CREATE TABLE "bike" (
    "bikeId" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "bike_pkey" PRIMARY KEY ("bikeId")
);

-- AddForeignKey
ALTER TABLE "bike" ADD CONSTRAINT "bike_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;
