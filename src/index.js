import "./style.css";
import { createApp } from "./app.js";

// создаём конкретно приложение
const todoApp = createApp();

// затем создаём список задач
const testTodoList = todoApp.createTodoList('Список дел');
const todoListID = testTodoList.id;

console.log(`Создали список задач с ID: ${todoListID}`);


const newTodo = todoApp.addTodoToList(
    todoListID,
    {
        title: "Придумать название задачи",
        definition: "Подробное описание задачи? Нет, лучше кратко и по делу?",
        priority: true,
        notes: "В пометках я пишу что-то, о чем решил не писать в описании?",
        dueDate: '2026-07-05',
        deadline: '2026-07-03'
    }
);

if (newTodo) {
    const todoID = newTodo.id;

    console.log(`Добавили задачу с ID: ${todoID}`);

    newTodo.addCheckbox('Проверить, работает новая структура кода');
    console.log('Выводим всю информацию по задаче, включая чексбокс: ', newTodo.getTodoData());

    todoApp.toggleTodoInList(todoListID, todoID);
}

console.log('Глобальная проверка списка в приложении: ', todoApp.getTodoListNames());

const badTodo = todoApp.addTodoToList(
    todoListID,
    {
        title: " ",
        definition: "Я это не увижу, если ошибка сработает",
    }
);

if (badTodo) {
    console.log(badTodo.getTodoData());
}