/*
  Warnings:

  - You are about to drop the column `userEmail` on the `comment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `comment` DROP COLUMN `userEmail`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `userId` VARCHAR(255) NULL;

-- CreateIndex
CREATE INDEX `Account_userId_idx` ON `Account`(`userId`);

-- CreateIndex
CREATE INDEX `Comment_issueId_idx` ON `Comment`(`issueId`);

-- CreateIndex
CREATE INDEX `Comment_userId_idx` ON `Comment`(`userId`);

-- CreateIndex
CREATE INDEX `Issue_assignedToUserId_idx` ON `Issue`(`assignedToUserId`);

-- CreateIndex
CREATE INDEX `Session_userId_idx` ON `Session`(`userId`);
