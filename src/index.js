import "./style.css";
import { createApp } from "./app.js";

// создаём конкретно приложение
const todoApp = createApp();

// затем создаём список задач
todoApp.createTodoList('Список дел');

// добавляем задачу
const newTodo = todoApp.addTodoToList('Список дел', 'Проверить этот код');
console.log(newTodo);

// проверяем всё остальное: id, связи
if (newTodo) {
    const idValue = newTodo.id;
    console.log(`Всё хорошо, задача создана. Её ID: ${idValue}`);

    // проверка того, срабатывает ли ID
    todoApp.toggleTodoInList('Список дел', idValue);

    // выносим наружу, чтобы проверить в консоли
    const todoListExtract = todoApp.getTodoList('Список дел');
    console.log('Проверяем задачи в списке: ', todoListExtract.getTodos());
}
