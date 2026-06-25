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

        removeTodo(id) {
            const index = todos.findIndex(todo => todo.id === id);

            if (index !== -1) {
                const removedTodo = todos.splice(index, 1)[0];
            } 
        },
    };
}