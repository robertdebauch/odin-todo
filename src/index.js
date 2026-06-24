import "./style.css";
import { createToDoItem } from "./todo.js";
import { createToDoList } from "./todoList.js";

const myGlobalTodoList = createToDoList();
const task_1 = createToDoItem("Learn how to use Closures in JS");

myGlobalTodoList.addTodo(task_1);

console.log(task_1.checkStatus());
task_1.toggleStatus();
console.log(task_1.checkStatus());

console.log(task_1.id);

console.log(myGlobalTodoList.getTodos());