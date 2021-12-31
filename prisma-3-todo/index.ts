import { PrismaClient } from "@prisma/client";
import { TodoController } from "./controllers/TodoController";

const prisma = new PrismaClient();

async function main() {
    const name = process.argv.slice(2)[0] as keyof TodoController;

    const args = process.argv.slice(3);

    const controller: any = new TodoController(prisma);

    if (!controller[name]) {
        console.log(`command "${name}" not found`);
        return;
    }

    await controller[name](...args);
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => prisma.$disconnect());
