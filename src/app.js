import { createToDoList } from "./todoList.js";

export function createApp() {
    // создаём объект для хранения списков задач
    const todoLists = {};

    return {
        // создаём список
        createList(title) {
            // опять нарушение ООП?
            if (!todoLists[title]) {
                todoLists[title] = createToDoList();
            }
        },

        // получаем список по его title
        getList(title) {
            return todoLists[title] || null;
        },

        // метод просмотра названий списков
        getListNames() {
            return Object.keys(todoLists);
        }
    }
}