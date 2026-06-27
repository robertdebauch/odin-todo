export function createChecklistItem(text) {
    return {
        id: crypto.randomUUID(),
        text,
        checked: false,
    };
}