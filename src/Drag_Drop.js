/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line import/prefer-default-export
export function dragDrop() {
  const target = document.getElementById('ListContainer');
  const items = target.getElementsByTagName('li');
  let current = null;
  for (const i of items) {
    i.draggable = true;

    i.addEventListener('dragstart', function () {
      current = this;
    });

    // eslint-disable-next-line func-names
    i.addEventListener('dragstart', function () {
      current = this;
    });

    i.addEventListener('dragover', (evt) => {
      evt.preventDefault();
    });
    // eslint-disable-next-line func-names
    i.addEventListener('drop', function (ev) {
      ev.preventDefault();
      if (this !== current) {
        let currentpos = 0;
        let droppedpos = 0;
        // eslint-disable-next-line no-plusplus
        for (let it = 0; it < items.length; it++) {
          if (current === items[it]) { currentpos = it; }
          if (this === items[it]) { droppedpos = it; }
        }
        if (currentpos < droppedpos) {
          this.parentNode.insertBefore(current, this.nextSibling);
          const ItemsList = [];
          const target = document.getElementById('ListContainer');
          const items = target.getElementsByTagName('li');
          for (const i of items) {
            const taskText = i.getElementsByTagName('div')[0].getElementsByTagName('textarea')[0].value;
            const taskCompletion = (i.getElementsByTagName('input'))[0].checked;
            ItemsList.push({ description: taskText, status: taskCompletion, id: i.id });
          }
          localStorage.setItem('library', JSON.stringify(ItemsList));
        } else {
          this.parentNode.insertBefore(current, this);
          const ItemsList = [];
          const target = document.getElementById('ListContainer');
          const items = target.getElementsByTagName('li');
          for (const i of items) {
            const taskText = i.getElementsByTagName('div')[0].getElementsByTagName('textarea')[0].value;
            const taskCompletion = (i.getElementsByTagName('input'))[0].checked;
            ItemsList.push({ description: taskText, status: taskCompletion, id: i.id });
          }
          localStorage.setItem('library', JSON.stringify(ItemsList));
        }
      }
    });
  }
}