// тестовая фабрика
export function createToDoItem(title) {
    
    const id = crypto.randomUUID();
    let completed = false;

    return {
        id, 
        title,
        // это ещё не все свойства! пока YAGNI-принцип советует НЕ грузить код

        checkStatus() {
            return completed;
        },

        toggleStatus() {
            completed = !completed;
        },
    };
}

