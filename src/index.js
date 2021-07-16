/* eslint-disable no-restricted-syntax */
// /* eslint-disable guard-for-in */
import './style.css';
// import { Task } from './Task';
// eslint-disable-next-line import/no-cycle
import { TaskList } from './tasklist';

// const NewTaskList = new TaskList(JSON.parse(localStorage.getItem('library')) || []);
// NewTaskList.ShowTasks();

// localStorage.clear();
// function addTasks() {
//   const TaskText = document.getElementById('TaskInput');
//   const TaskId = Math.floor(Math.random() * 1000); // idGenerate();
//   const NewTask = new Task(TaskText.value, false, TaskId);
//   TaskText.value = '';
//   NewTaskList.addTask(NewTask);
//   NewTaskList.AddToStorage();
// }
// eslint-disable-next-line max-len
const NewTaskList = new TaskList([]);

const NewList = [{ description: 'Task1', status: false, id: 1 }, { description: 'Task2', status: false, id: 2 }, { description: 'Task3', status: false, id: 3 }];

// eslint-disable-next-line guard-for-in
for (const i of NewList) {
  NewTaskList.addTask(i);
  NewTaskList.AddToStorage();
}

// eslint-disable-next-line no-unused-vars
// function clearCompleted() {
//   NewTaskList.clearCompleted();
// }

// const clearAll = document.getElementById('clearall');
// clearAll.onclick = clearCompleted;
// const TasksInput = document.getElementById('TaskInput');
// TasksInput.addEventListener('keyup', (event) => {
//   if (event.code === 'Enter') {
//     addTasks();
//   }
// });

// eslint-disable-next-line import/prefer-default-export
export { NewTaskList };