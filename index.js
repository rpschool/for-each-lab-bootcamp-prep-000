function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var things = ['dog', 'cat', 0, '1'];
  things.forEach(callback);
  return things;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
