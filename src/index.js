// /* eslint-disable guard-for-in */
import './style.css';
import { Task } from './Task';
import { TaskList } from './tasklist';

const NewTaskList = new TaskList(JSON.parse(localStorage.getItem('library')) || []);
NewTaskList.ShowBooks();
//localStorage.clear();
function addTasks() {
  const TaskText = document.getElementById('TaskInput');
  const IdTask = Math.floor(Math.random() * 1000);
  const NewTask = new Task(TaskText.value, false, IdTask);
  TaskText.value = '';
  NewTaskList.addTask(NewTask);
  NewTaskList.AddToStorage();
}

const TasksInput = document.getElementById('TaskInput');

TasksInput.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    addTasks();
  }
});