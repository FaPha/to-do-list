const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById('task-input');
    addTask (inputField.value);
    form.reset();
};