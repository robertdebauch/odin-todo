import "./style.css";
import { createApp } from "./app.js";

// создаём конкретно приложение
const todoApp = createApp();

// создаём список
todoApp.createList('Список дел');

// тест с переменной для хранения
const currentTasksList = todoApp.getList('Список дел'); // дословная проверка

// пока хард-код проверка
if (currentTasksList) {
    currentTasksList.addTodo('Создать модули');
    currentTasksList.addTodo('Настроить логистику');
    currentTasksList.addTodo('Не застрять в рекурсии');

    let currentTasks = currentTasksList.getTodos();
    console.log('1 : Добавили:', currentTasks);

    const currentTaskId = currentTasks[0].id; // чтобы сохранить id для теста

    // меняем статус выполнения (тест опять же)
    console.log('2 : Статус до смены: ', currentTasks[0].checkStatus());
    currentTasksList.toggleTodo(currentTaskId);
    console.log('3 : Статус ПОСЛЕ смены: ', currentTasks[0].checkStatus());

    // удаляем в тестовом режиме
    currentTasksList.removeTodo(currentTaskId);
    console.log('4 : Удаляем и ожидаем 2 дела вместо 3: ', currentTasksList.getTodos());
}

// проверка 
console.log('Мои списки: ', todoApp.getListNames());