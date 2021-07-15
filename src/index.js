// /* eslint-disable guard-for-in */
import './style.css';
import { Task } from './Task';
import { TaskList } from './tasklist';

const NewTaskList = new TaskList(JSON.parse(localStorage.getItem('library')) || []);
NewTaskList.ShowBooks();
function addTasks() {
  const TaskText = document.getElementById('TaskInput');
  const IdTask = Math.floor(Math.random() * 1000);
  const NewTask = new Task(TaskText.value, false, IdTask);
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
TasksInput.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    addTasks();
  }
});