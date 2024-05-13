import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function createCargo () {
    const Aluno = await prisma.tb_cargo.create ({
        data: {
            id: '1',
            cargo: 'Aluno',
        }
    })

    const Professor = await prisma.tb_cargo.create ({
        data: {
            id: '2',
            cargo: 'Professor',
        }
    })
}

async function createUser () {
    const Rhuan = await prisma.tb_usuario.create ({
        data: {
            email: 'rhuanlino309@gmail.com',
            nome: 'Rhuan',
            sobrenome: 'Lino',
            dt_nascimento: '29.08.2003',
            senha: 'Rhuan123',
        }
    })
}