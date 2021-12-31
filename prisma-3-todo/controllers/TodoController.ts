import { PrismaClient } from "@prisma/client";

export class TodoController {
    constructor(private prisma: PrismaClient) {}

    public async index() {
        const todos = await this.prisma.todo.findMany();

        console.table(todos);
    }

    public async create(title: string) {
        if (!title) {
            throw new Error(`title is required`);
        }

        const todo = await this.prisma.todo.create({
            data: {
                title,
                done: false,
            },
        });

        console.log(`Todo created \n`, todo);
    }

    public async update(id: number, ...args: string[]) {
        const data = {
            title: undefined as string | undefined,
            done: undefined as boolean | undefined,
        };

        if (!id) {
            console.log(`id is required`);
            return;
        }

        args.forEach((arg, index) => {
            if (arg === "--title") {
                data.title = args[index + 1];
            }

            if (arg === "--done") {
                data.done = args[index + 1] == "true";
            }
        });

        const { count } = await this.prisma.todo.updateMany({
            where: { id: Number(id) },
            data,
        });

        if (count === 0) {
            console.log(`Todo not found`);
            return;
        }

        console.log(`Todo updated`);
    }

    public async delete(id: number) {
        if (!id) {
            console.log(`id is required`);
            return;
        }

        const { count } = await this.prisma.todo.deleteMany({
            where: { id: Number(id) },
        });

        if (count === 0) {
            console.log(`Todo not found`);
            return;
        }

        console.log(`Todo deleted`);
    }
}
