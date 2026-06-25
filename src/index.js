import "./style.css";
import { createToDoItem } from "./todo.js";
import { createToDoList } from "./todoList.js";

// создаём массив, который будем заполнять объектами todo
const myGlobalTodoList = createToDoList();

// создание тестовых задач
const task_1 = createToDoItem("Learn how to use Closures in JS");
const task_2 = createToDoItem("Create the Third Task");
const task_3 = createToDoItem("Create the Fourth Task");
const task_4 = createToDoItem("That's enough!");

// добавление тестовых задач в тестовый список
myGlobalTodoList.addTodo(task_1);
myGlobalTodoList.addTodo(task_2);
myGlobalTodoList.addTodo(task_3);
myGlobalTodoList.addTodo(task_4);

// проверяем работу конкретных задач
console.log(task_1.checkStatus());
task_1.toggleStatus();
console.log(task_1.checkStatus());
console.log(task_1.id);

// проверяем как удаляется
console.log(myGlobalTodoList.getTodos());
myGlobalTodoList.removeTodo(task_4.id);
console.log(myGlobalTodoList.getTodos());

// проверяем переключение
console.log(task_2.checkStatus());
myGlobalTodoList.toggleTodo(task_2.id);
console.log(task_2.checkStatus());
myGlobalTodoList.toggleTodo(task_2.id);
console.log(task_2.checkStatus());