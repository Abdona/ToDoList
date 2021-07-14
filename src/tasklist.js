import MyImage from './images/3-vertical-dots.svg';
// eslint-disable-next-line no-unused-vars
import { Task } from './Task';
// eslint-disable-next-line import/prefer-default-export
export class TaskList {
  constructor(Tasks) {
    this.TaskListCollection = Tasks;
  }

  // eslint-disable-next-line class-methods-use-this
  addTask(Task, flag = true) {
    if (flag === true) {
      this.TaskListCollection.push(Task);
    }
    const NewListItem = document.createElement('li');
    NewListItem.setAttribute('id', Task.id);
    NewListItem.setAttribute('class', 'ListItem');
    const NewListTask = document.createElement('p');
    NewListTask.innerHTML = Task.description;
    NewListTask.setAttribute('id', Task.id * 2);
    const NewListCheck = document.createElement('input');
    NewListCheck.setAttribute('type', 'checkbox');
    NewListCheck.addEventListener('click', () => { this.CheckSelect(Task); });
    const NewListdots = document.createElement('img');
    NewListdots.setAttribute('src', MyImage);
    const TaskDiv = document.createElement('div');
    TaskDiv.setAttribute('id', 'taskcont');
    document.getElementById('ListContainer').appendChild(NewListItem).appendChild(NewListCheck);
    document.getElementById('ListContainer').appendChild(NewListItem).appendChild(TaskDiv).appendChild(NewListTask);
    document.getElementById('ListContainer').appendChild(NewListItem).appendChild(NewListdots);
  }

  // eslint-disable-next-line class-methods-use-this
  CheckSelect(Task) {
    const TaskP = document.getElementById(Task.id * 2);
    if (Task.status === false) {
      Task.status = true;
      this.AddToStorage();
      TaskP.style.textDecoration = 'line-through';
    } else {
      Task.status = false;
      this.AddToStorage();
      TaskP.style.textDecoration = 'none';
    }
  }

  // eslint-disable-next-line class-methods-use-this
  CheckSelectonref(Task) {
    const TaskP = document.getElementById(Task.id * 2);
    if (Task.status === true) {
      TaskP.style.textDecoration = 'line-through';
    }
  }

  AddToStorage() {
    localStorage.setItem('library', JSON.stringify(this.TaskListCollection));
  }
  /* eslint-disable */
    ShowBooks() {
      for (const i in this.TaskListCollection) {
        //alert(i);
        this.addTask(this.TaskListCollection[i],false);
        this.CheckSelectonref(this.TaskListCollection[i]);
      }
    }
  }