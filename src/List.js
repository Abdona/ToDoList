/* eslint-disable no-restricted-syntax */
import MyImage from './images/3-vertical-dots.svg';
// eslint-disable-next-line import/prefer-default-export
export function CreatList(Task) {
// eslint-disable-next-line guard-for-in
  for (const i in Task) {
    const NewListItem = document.createElement('li');
    const NewListTask = document.createElement('p');
    const NewListCheck = document.createElement('input');
    const NewListdots = document.createElement('img');
    const TaskDiv = document.createElement('div');
    TaskDiv.setAttribute('id', 'taskcont');
    NewListdots.setAttribute('src', MyImage);
    NewListItem.setAttribute('id', 'ListItem');
    NewListCheck.setAttribute('type', 'checkbox');
    NewListTask.innerHTML = Task[i].description;
    document.getElementById('ListContainer').appendChild(NewListItem).appendChild(NewListCheck);
    document.getElementById('ListContainer').appendChild(NewListItem).appendChild(TaskDiv).appendChild(NewListTask);
    document.getElementById('ListContainer').appendChild(NewListItem).appendChild(NewListdots);
  }
}
