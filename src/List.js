/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line import/prefer-default-export
export function CreatList(Task) {
// eslint-disable-next-line guard-for-in
  for (const i in Task) {
    const NewListItem = document.createElement('li');
    NewListItem.innerHTML = Task[i].description;
    document.getElementById('ListItems').appendChild(NewListItem);
  }
};
