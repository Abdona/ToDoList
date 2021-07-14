import MyImage from './images/3-vertical-dots.svg';
// eslint-disable-next-line import/prefer-default-export
export class TaskList {
  constructor(Tasks) {
    this.TaskListCollection = Tasks;
    this.length = 0;
  }

  addTask(Task) {
    this.length += 1;
    this.TaskListCollection.push(Task);
    Task.id = this.length;
    const NewListItem = document.createElement('li');
    const NewListTask = document.createElement('p');
    const NewListCheck = document.createElement('input');
    //alert('hellofrom add task');
    //NewListCheck.addEventListener('change', this.CheckSelect(Task.id));
    const NewListdots = document.createElement('img');
    const TaskDiv = document.createElement('div');
    TaskDiv.setAttribute('id', 'taskcont');
    NewListdots.setAttribute('src', MyImage);
    NewListItem.setAttribute('class', 'ListItem');
    NewListItem.setAttribute('id', Task.id);
    NewListCheck.setAttribute('type', 'checkbox');
    NewListTask.innerHTML = Task.description;
    document.getElementById('ListContainer').appendChild(NewListItem).appendChild(NewListCheck);
    document.getElementById('ListContainer').appendChild(NewListItem).appendChild(TaskDiv).appendChild(NewListTask);
    document.getElementById('ListContainer').appendChild(NewListItem).appendChild(NewListdots);
  }

  // eslint-disable-next-line class-methods-use-this
  CheckSelect(TaskId) {
    const TaskContainer = document.getElementById(TaskId);
    const Pchild = TaskContainer.childNodes;
    alert(Pchild);
  }

  AddToStorage() {
    localStorage.setItem('library', JSON.stringify(this.TaskListCollection));
  }
  /* eslint-disable */
    ShowBooks() {
      for (const i in this.TaskListCollection) {
        this.addBook(this.TaskListCollection[i])
      }
    }
  }