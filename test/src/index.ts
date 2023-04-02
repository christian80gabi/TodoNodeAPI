import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const newUser = await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io',
            todos: {
                create: {
                    title: "Do laundry",
                },
            },
        },
    })
    console.log('Created new user: ', newUser)

    const allUsers = await prisma.user.findMany({
        include: { todos: true },
    })
    console.log('All users: ')
    console.dir(allUsers, { depth: null })
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect())
