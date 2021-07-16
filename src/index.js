/* eslint-disable no-restricted-syntax */
// /* eslint-disable guard-for-in */
import './style.css';
// eslint-disable-next-line import/no-cycle
import { TaskList } from './tasklist';

// eslint-disable-next-line max-len
const NewTaskList = new TaskList(JSON.parse(localStorage.getItem('library')) || []);
if (JSON.parse(localStorage.getItem('length')) !== 4) {
  const NewList = [{ description: 'Task1', status: false, id: 1 }, { description: 'Task2', status: false, id: 2 }, { description: 'Task3', status: false, id: 3 }, { description: 'Task4', status: false, id: 4 }];
  // eslint-disable-next-line guard-for-in
  for (const i in NewList) {
    // NewList[i].status = JSON.parse(localStorage.getItem('library'))[i].status || false;
    NewTaskList.addTask(NewList[i]);
    NewTaskList.AddToStorage();
  }
} else {
  NewTaskList.ShowTasks();
}
// eslint-disable-next-line import/prefer-default-export
export { NewTaskList };