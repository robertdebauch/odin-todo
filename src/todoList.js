import { createToDoItem } from "./todo.js";

// работа по конкретному списку задач
export function createToDoList(title) {
    const todos = [];
    const id = crypto.randomUUID();
    const todoTargetFinder = (todo, id) => todo.id === id;
    
    return {
        id, 
        title,
        
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