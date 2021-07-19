// eslint-disable-next-line import/prefer-default-export
function newId(taskList) {
  let id = taskList.length;
  id += 1;
  return id;
}

function updateId(Start, length, arrayTask) {
  // eslint-disable-next-line no-plusplus
  for (let j = Start; j < length; j++) {
    document.getElementById(`li${arrayTask[j].id}`).id = arrayTask[j].id - 1;
    document.getElementById(`li${arrayTask[j].id * 2}`).id = (arrayTask[j].id - 1) * 2;
    document.getElementById(`li${arrayTask[j].id * 3}`).id = (arrayTask[j].id - 1) * 3;
    arrayTask[j].id -= 1;
  }
  return arrayTask;
}

export { newId, updateId };