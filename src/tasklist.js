import MyImage from './images/3-vertical-dots.svg';
import { dragDrop } from './Drag_Drop';
// eslint-disable-next-line import/no-cycle
import { CheckSelect } from './StatusUpdate';
// eslint-disable-next-line no-unused-vars
import { Task } from './Task';
// eslint-disable-next-line import/no-cycle
import { editContent } from './ContentUpdate';
// eslint-disable-next-line import/prefer-default-export
export class TaskList {
  constructor(Tasks) {
    this.TaskListCollection = Tasks;
    this.Task1 = [];
    this.length = 0;
  }

  // eslint-disable-next-line class-methods-use-this
  addTask(Task, flag = true) {
    if (flag === true) {
      this.length += 1;
      this.TaskListCollection.push(Task);
    }
    const NewListItem = document.createElement('li');
    NewListItem.setAttribute('id', Task.id);
    NewListItem.setAttribute('class', 'ListItem');
    const NewListTask = document.createElement('textarea');
    NewListTask.setAttribute('maxlength', '255');
    NewListTask.setAttribute('contenteditable', 'true');
    NewListTask.addEventListener('change', () => { editContent(Task); });
    NewListTask.innerHTML = Task.description;
    NewListTask.setAttribute('id', Task.id * 2);
    const NewListCheck = document.createElement('input');
    NewListCheck.setAttribute('type', 'checkbox');
    NewListCheck.setAttribute('id', Task.id * 3);
    NewListCheck.addEventListener('click', () => { CheckSelect(Task); });
    const NewListdots = document.createElement('img');
    NewListdots.setAttribute('src', MyImage);
    const TaskDiv = document.createElement('div');
    TaskDiv.setAttribute('id', 'taskcont');
    document.getElementById('ListContainer').appendChild(NewListItem).appendChild(NewListCheck);
    document.getElementById('ListContainer').appendChild(NewListItem).appendChild(TaskDiv).appendChild(NewListTask);
    document.getElementById('ListContainer').appendChild(NewListItem).appendChild(NewListdots);
    dragDrop();
  }

  clearCompleted() {
    const NewTaskList = this.TaskListCollection.filter((task) => task.status === false);
    this.length = NewTaskList.length;
    localStorage.setItem('length', JSON.stringify(this.length));
    // eslint-disable-next-line no-restricted-syntax
    for (const i in this.TaskListCollection) {
      if (this.TaskListCollection[i].status === true) {
        document.getElementById(this.TaskListCollection[i].id).remove();
      }
    }
    this.TaskListCollection = NewTaskList;
    localStorage.setItem('library', JSON.stringify(this.TaskListCollection));
  }

  // eslint-disable-next-line class-methods-use-this
  CheckSelectonref(Task) {
    const TaskP = document.getElementById(Task.id * 2);
    const newCheckBox = document.getElementById(Task.id * 3);
    if (Task.status === true) {
      newCheckBox.checked = true;
      TaskP.style.textDecoration = 'line-through';
    }
  }

  AddToStorage() {
    localStorage.setItem('length', JSON.stringify(this.length));
    localStorage.setItem('library', JSON.stringify(this.TaskListCollection));
  }
  /* eslint-disable */
    ShowTasks() {
      for (const i in this.TaskListCollection) {
        this.length +=1 ;
        this.addTask(this.TaskListCollection[i],false);
        this.CheckSelectonref(this.TaskListCollection[i]);
      }
    }
  }