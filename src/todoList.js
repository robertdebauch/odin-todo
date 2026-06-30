import { createToDoItem } from "./todo.js";

// работа по конкретному списку задач
export function createToDoList(initialTitle) {
    const todos = [];
    
    const id = crypto.randomUUID();
    let currentTitle = initialTitle;
    
    const todoTargetFinder = (todo, id) => todo.id === id;
    
    return {
        id, 

        getTitle() {
            return currentTitle;
        },

        updateTitle(newTitle) {
            if (newTitle && newTitle.trim() !== "") {
                currentTitle = newTitle.trim();
            }
        },
        
        addTodo(fields) {
            const newTodo = createToDoItem(fields); // работает по всем полям
            todos.push(newTodo);

            return newTodo;
        },

        getTodos() {
            return [...todos];
        },

        removeTodo(id) {
            const index = todos.findIndex(item => todoTargetFinder(item, id));

            if (index !== -1) {
                todos.splice(index, 1); // простое удаление
            } 
        },

        toggleTodo(id) {
            const foundTodo = todos.find(item => todoTargetFinder(item, id));

            if (foundTodo) {
                foundTodo.toggleStatus();
            } 
        }
    };
}