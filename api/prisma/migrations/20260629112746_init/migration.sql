-- CreateTable
CREATE TABLE "Media" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projet" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Projet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Techno" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "Techno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjetTechno" (
    "projetId" INTEGER NOT NULL,
    "technoId" INTEGER NOT NULL,

    CONSTRAINT "ProjetTechno_pkey" PRIMARY KEY ("projetId","technoId")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Techno_name_key" ON "Techno"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

-- AddForeignKey
ALTER TABLE "ProjetTechno" ADD CONSTRAINT "ProjetTechno_projetId_fkey" FOREIGN KEY ("projetId") REFERENCES "Projet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetTechno" ADD CONSTRAINT "ProjetTechno_technoId_fkey" FOREIGN KEY ("technoId") REFERENCES "Techno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
