// /* eslint-disable guard-for-in */
import './style.css';
import { Task } from './Task';
import { TaskList } from './tasklist';

const NewBookList = new TaskList([]);
function addTask() {
  const TaskText = document.getElementById('TaskInput');
  const NewTask = new Task(TaskText.value, false);
  TaskText.value = '';
  NewBookList.addTask(NewTask);
  NewBookList.AddToStorage();
}
const TasksInput = document.getElementById('TaskInput');
// eslint-disable-next-line no-alert
// eslint-disable-next-line prefer-arrow-callback
// eslint-disable-next-line func-names
// eslint-disable-next-line prefer-arrow-callback
TasksInput.addEventListener('keyup', function (event) {
  if (event.code === 'Enter') {
    addTask();
  }
});