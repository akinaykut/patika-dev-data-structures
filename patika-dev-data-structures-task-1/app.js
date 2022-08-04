let array = [];
let arrayIndex = 0;

for (let i = 0; i < 50; i++) {
  let num = Math.floor(Math.random() * 200);

  array.push(num);
}

console.log(array);
function myInsertSort() {
  for (let i in array) {
    let smallIndex = findSmall(array, i);
    let temp = array[i];
    array[i] = array[smallIndex];
    array[smallIndex] = temp;
  }
  console.log(array);
}
myInsertSort();

function findSmall(array, lastIndex) {
  let temp = array[lastIndex];
  let index = lastIndex;
  for (lastIndex; lastIndex < array.length; lastIndex++) {
    if (array[lastIndex] < temp) {
      temp = array[lastIndex];
      index = lastIndex;
    }
  }
  return index;
}
