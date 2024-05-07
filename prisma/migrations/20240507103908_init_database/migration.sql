-- CreateTable
CREATE TABLE "tb_usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nome" VARCHAR(30) NOT NULL,
    "sobrenome" VARCHAR(40) NOT NULL,
    "dt_nascimento" TIMESTAMP(3) NOT NULL,
    "senha" VARCHAR(30) NOT NULL,
    "cargoId" INTEGER NOT NULL,

    CONSTRAINT "tb_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_cargo" (
    "id" INTEGER NOT NULL,
    "cargo" TEXT NOT NULL,

    CONSTRAINT "tb_cargo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_usuario_email_key" ON "tb_usuario"("email");

-- AddForeignKey
ALTER TABLE "tb_usuario" ADD CONSTRAINT "tb_usuario_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "tb_cargo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
