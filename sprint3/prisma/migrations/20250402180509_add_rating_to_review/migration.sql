/*
  Warnings:

  - Added the required column `description` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" INTEGER NOT NULL,
    "author" TEXT,
    "description" TEXT NOT NULL,
    "rating" REAL NOT NULL,
    "film_name" TEXT NOT NULL
);
INSERT INTO "new_Review" ("author", "film_name", "id", "year") SELECT "author", "film_name", "id", "year" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
