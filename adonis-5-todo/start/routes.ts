import Route from "@ioc:Adonis/Core/Route";

Route.resource("/todos", "TodosController").only(["store", "index", "update"]);

Route.get("/", ({ view }) => {
  return view.render("home");
});
