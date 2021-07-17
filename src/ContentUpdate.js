// eslint-disable-next-line import/no-cycle
import { NewTaskList } from './index';
// eslint-disable-next-line import/prefer-default-export
export function editContent(Task) {
  const Tasktext = document.getElementById(Task.id * 2);
  Task.description = Tasktext.value;
  NewTaskList.AddToStorage();
}