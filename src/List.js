/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line import/prefer-default-export
export function CreatList(Task) {
// eslint-disable-next-line guard-for-in
  for (const i in Task) {
    const NewListItem = document.createElement('li');
    const NewListTask = document.createElement('p');
    const NewListCheck = document.createElement('input');
    NewListItem.setAttribute('id', 'ListItem');
    NewListCheck.setAttribute('type', 'checkbox');
    NewListTask.innerHTML = Task[i].description;
    document.getElementById('ListContainer').appendChild(NewListItem).appendChild(NewListCheck);
    document.getElementById('ListContainer').appendChild(NewListItem).appendChild(NewListTask);
  }
}
