// eslint-disable-next-line import/prefer-default-export
function newId(taskList) {
  let id = taskList.length;
  id += 1;
  return id;
}

function updateId(Start, length, arrayTask) {
  // eslint-disable-next-line no-plusplus
  for (let j = Start; j < length; j++) {
    const currntId = arrayTask[j].id;
    document.getElementById(`${currntId * 1}`).id = `${(currntId - 1)}`;
    document.getElementById(`li${currntId * 2}`).id = `li${(currntId - 1) * 2}`;
    document.getElementById(`bx${currntId * 3}`).id = `bx${(currntId - 1) * 3}`;
    arrayTask[j].id -= 1;
  }
  return arrayTask;
}

export { newId, updateId };