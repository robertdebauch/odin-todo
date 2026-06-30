import { createToDoList } from "./todoList.js";

export function createApp() {
    const todoLists = [];

    const todoListTargetFinder = (todoList, id) => todoList.id === id;

    function getTodoList(todoListID) {
        return todoLists.find(todoList => todoList.id === todoListID) || null;
    };

    function executeWithTodoList(todoListID, execution) {
        const todoList = getTodoList(todoListID);

        if (todoList) {
            return execution(todoList);
        } else {
            console.log(`Список с ID ${todoListID} НЕ НАЙДЕН`);
            return null;
        }
    }


    return {
        getTodoList,

        createTodoList(title) {

            const newTodoList = createToDoList(title);

            todoLists.push(newTodoList);

            return newTodoList;

        },

        removeTodoList(todoListID) {
            const index = todoLists.findIndex(item => todoListTargetFinder(item, todoListID));

            if (index !== -1) {
                todoLists.splice(index, 1);
            }
        },

        addTodoToList(todoListID, todoFields) {
            return executeWithTodoList(todoListID, function (todoList) {
                return todoList.addTodo(todoFields);
            });
        },

        updateTodoListTitle(todoListID, newTitle) {
            executeWithTodoList(todoListID, function (todoList) {
                return todoList.updateTitle(newTitle);
            });
        },

        toggleTodoInList(todoListID, todoID) {
            executeWithTodoList(todoListID, function (todoList) {
                todoList.toggleTodo(todoID);
            });
        },

        removeTodoFromList(todoListID, todoID) {
            executeWithTodoList(todoListID, function (todoList) {
                todoList.removeTodo(todoID);
            });
        },

        getTodoListFields() {
            return todoLists.map(todoList => {
                return {
                    id: todoList.id,
                    title: todoList.getTitle()
                };
            });
        },

        getTodoListFieldsByID(todoListID) {
            return executeWithTodoList(todoListID, function (todoList) {
                return {
                    id: todoList.id,
                    title: todoList.getTitle()
                };
            });
        }
    }
}