import { createToDoList } from "./todoList.js";

export function createApp() {
    // создаём объект для хранения списков задач
    // const todoLists = {};
    
    // создаём массив для хранения объектов
    const todoLists = [];

    // вынес функцию из объекта наверх
    function getTodoList(todoListID) {
        return todoLists.find(todoList => todoList.id === todoListID) || null;
    };


    return {
        // забираем полученный список с собой
        getTodoList,

        // создаём список
        createTodoList(title) {

            const newTodoList = createToDoList(title);

            todoLists.push(newTodoList);

            return newTodoList;

        },

        addTodoToList(todoListID, todoFields) {
            const todoList = getTodoList(todoListID); 
            if (todoList) {
                return todoList.addTodo(todoFields);
            } else {
                console.log(`Список с ID ${todoListID} НЕ НАЙДЕН`);
                return null;
            }
        },

        toggleTodoInList(todoListID, todoID) {
            const todoList = getTodoList(todoListID); // повтор 
            if (todoList) {
                todoList.toggleTodo(todoID);
            }
        },

        removeTodoFromList(todoListID, todoID) {
            const todoList = getTodoList(todoListID); // повтор 
            if (todoList) {
                todoList.removeTodo(todoID);
            }
        },

        // метод map для получения названий списков
        getTodoListNames() {
            return todoLists.map(todoList => todoList.title);
        }
    }
}