let todosDataJson = localStorage.getItem("tasks") || "[]";
let todos = JSON.parse(todosDataJson);

export default todos;