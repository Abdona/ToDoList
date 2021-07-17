/* eslint-disable import/no-cycle */
import './style.css';
import { Task } from './Task';
import { TaskList } from './tasklist';

const NewTaskList = new TaskList(JSON.parse(localStorage.getItem('library')) || []);
NewTaskList.ShowTasks();
// localStorage.clear();
function addTasks() {
  const TaskText = document.getElementById('TaskInput');
  const TaskId = Math.floor(Math.random() * 1000); // idGenerate();
  const NewTask = new Task(TaskText.value, false, TaskId);
  TaskText.value = '';
  NewTaskList.addTask(NewTask);
  NewTaskList.AddToStorage();
}
// eslint-disable-next-line no-unused-vars
function clearCompleted() {
  NewTaskList.clearCompleted();
}
const clearAll = document.getElementById('clearall');
clearAll.onclick = clearCompleted;
const TasksInput = document.getElementById('TaskInput');
TasksInput.addEventListener('change', () => {
  addTasks();
});

// eslint-disable-next-line import/prefer-default-export
export { NewTaskList };