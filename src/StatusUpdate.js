// eslint-disable-next-line import/no-cycle
import { NewTaskList } from './index';
// eslint-disable-next-line import/prefer-default-export
export function CheckSelect(Task) {
  const TaskP = document.getElementById(Task.id * 2);
  if (Task.status === false) {
    TaskP.style.textDecoration = 'line-through';
  } else {
    TaskP.style.textDecoration = 'none';
  }
  Task.status = !Task.status;
  NewTaskList.AddToStorage();
}