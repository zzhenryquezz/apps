import Route from "@ioc:Adonis/Core/Route";

Route.get("/", () => {
  return {
    message: "Hello world",
  };
});
