import { createToDoList } from "./todoList.js";

export function createApp() {
    // создаём объект для хранения списков задач
    const todoLists = {};

    // вынес функцию из объекта наверх
    function getTodoList(title) {
        return todoLists[title] || null;
    };


    return {
        // забираем полученный список с собой
        getTodoList,

        // создаём список
        createTodoList(title) {
            
            if (!todoLists[title]) {
               return todoLists[title] = createToDoList();
            }
        },

        addTodoToList(todoListTitle, todoTitle) {
            const todoList = getTodoList(todoListTitle); 
            if (todoList) {
                return todoList.addTodo(todoTitle);
            } else {
                console.log(`Список ${todoListTitle} НЕ НАЙДЕН`);
                return null;
            }
        },

        toggleTodoInList(todoListTitle, todoID) {
            const todoList = getTodoList(todoListTitle); // повтор 
            if (todoList) {
                todoList.toggleTodo(todoID);
            }
        },

        removeTodoFromList(todoListTitle, todoID) {
            const todoList = getTodoList(todoListTitle); // повтор 
            if (todoList) {
                todoList.removeTodo(todoID);
            }
        },

        // метод просмотра названий списков
        getTodoListNames() {
            return Object.keys(todoLists);
        }
    }
}