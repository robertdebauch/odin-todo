// работа по конкретному списку задач
export function createToDoList() {
    const todos = [];

    return {
        // свойства позже (YAGNI)
        addTodo(newTodo) {
            todos.push(newTodo);
        },

        getTodos() {
            return [...todos];
        },
    };
}