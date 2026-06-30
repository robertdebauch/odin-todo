import { createChecklistItem } from "./checkbox.js";
import { parseISO } from 'date-fns';

export function createToDoItem(fields) {

    if (!fields || !fields.title || fields.title.trim() === "") {
        throw new Error("Unable to create ToDo: field 'title' is required and MUST not be empty");
    }

    const id = crypto.randomUUID();

    let parsedDueDate = null;
    if (fields.dueDate) {
        parsedDueDate = parseISO(fields.dueDate);
    }


    const todoData = {
        title: fields.title.trim(),
        definition: fields.definition || "",
        priority:  fields.priority || false,
        dueDate:  parsedDueDate,
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

