import "./style.css";
import { createApp } from "./app.js";

// создаём конкретно приложение
const todoApp = createApp();

// затем создаём список задач
todoApp.createTodoList('Список дел');

// добавляем задачу
const newTodo = todoApp.addTodoToList('Список дел', {
    title: 'проверить работу нового todo',
    description: 'теперь используется блок параметров для нужных свойств',
    priority: true,
    notes: 'делаю заметки, делаю пометки'
});

console.log(newTodo);

// проверяем всё остальное: id, связи
if (newTodo) {
    console.log('До обновления данные такие: ', newTodo.getTodoData());

    // проверка чекбокса
    newTodo.addCheckbox('Ошибок в консоли нет?');
    newTodo.addCheckbox('Задачу видно?');

    // проверка того, появились ли чекбоксы
    let currentItemData = newTodo.getTodoData();
    console.log('В наличии два чекбокса?', JSON.parse(JSON.stringify(currentItemData.checklist)));

    // отмечаем чекбокс
    const firstCheckbox = currentItemData.checklist[0].id;
    newTodo.fillCheckbox(firstCheckbox);

    // обновляем данные
    currentItemData = newTodo.getTodoData();
    console.log('Первый чекбокс должен быть true, проверим:', currentItemData.checklist);

    // удаляем чекбокс из задачи вообще
    newTodo.removeCheckbox(firstCheckbox);
    currentItemData = newTodo.getTodoData();
    
    console.log('Должен остаться только один чекбокс:', currentItemData.checklist);

    newTodo.update({
        description: 'если вижу этот текст, значит проверка прошла успешно',
        notes: 'обновляю заметки, имитируя работу'
    });
    console.log('После обновления данных: ', newTodo.getTodoData());
}


