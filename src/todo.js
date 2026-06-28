import { createChecklistItem } from "./checkbox.js";

// тестовая фабрика
export function createToDoItem(fields) {

    const id = crypto.randomUUID();

    const todoData = {
        title: fields.title,
        description: fields.description || "",
        priority:  fields.priority || false,
        dueDate:  fields.dueDate || "Too late!",
        notes: fields.notes || "",
        completed: false,
        checklist: [],
    }

    return {
        id,

        getTodoData() {
            return { ...todoData };
        },

        update(newFields) {
            Object.assign(todoData, newFields);
        },

        checkStatus() {
            return todoData.completed;
        },

        toggleStatus() {
            todoData.completed = !todoData.completed;
        },

        addCheckbox(text) {
            const newCheckbox = createChecklistItem(text);
        
            todoData.checklist.push(newCheckbox);
        },

        removeCheckbox(checkboxID) {
            todoData.checklist = todoData.checklist.filter(item => item.id !== checkboxID);
        },

        fillCheckbox(checkboxID) {
            const checkbox = todoData.checklist.find(item => item.id === checkboxID);

            if(checkbox) {
                checkbox.checked = !checkbox.checked;
            }
        }


    };
}

