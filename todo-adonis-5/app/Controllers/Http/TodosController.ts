import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Todo from "App/Models/Todo";

export default class TodosController {
  public async index() {
    return await Todo.all();
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(["title"]);

    const todo = await Todo.create(data);

    return todo;
  }

  public async update({ params, request }: HttpContextContract) {
    const todo = await Todo.findOrFail(params.id);

    const data = request.only(["done"]);

    todo.merge(data);

    await todo.save();

    return todo;
  }
}
