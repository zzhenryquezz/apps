## Primas todo

A simple crud todo using prisma framework

## Usage

-   install the dependencies: `npm install`
-   create a .env and add a `DATABASE_URL` with a valid postgresql database url
-   run `npx prisma migrate dev --name init` to setup the database

## Commands

This project is a CLI(command line interface), so it uses commands to manipulate the database

### Index

This command will list all todos in the database.

`npm start index`

### Create

This command will create a new todo.

`npm start create my-todo-title`

### Update

This command will update a todo by id, it throws a error if the id is invalid.

`npm start -- update 1 --title update-title --done true`

### Delete

This command will delete a todo by id, it throws a error if the id is invalid.

`npm start delete 1`
