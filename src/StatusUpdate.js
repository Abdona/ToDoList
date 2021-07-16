// eslint-disable-next-line import/no-cycle
import { NewTaskList } from './index';
// eslint-disable-next-line import/prefer-default-export
export function CheckSelect(Task) {
  const TaskP = document.getElementById(Task.id * 2);
  if (Task.status === false) {
    Task.status = true;
    NewTaskList.AddToStorage();
    TaskP.style.textDecoration = 'line-through';
  } else {
    Task.status = false;
    NewTaskList.AddToStorage();
    TaskP.style.textDecoration = 'none';
  }
}