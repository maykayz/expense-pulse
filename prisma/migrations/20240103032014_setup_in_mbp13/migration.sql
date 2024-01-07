/*
  Warnings:

  - You are about to alter the column `category` on the `expense` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - You are about to alter the column `platform` on the `expense` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `expense` MODIFY `category` VARCHAR(191) NOT NULL,
    MODIFY `platform` VARCHAR(191) NOT NULL;
