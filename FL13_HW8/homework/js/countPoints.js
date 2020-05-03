function countPoints(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i].charAt(0);
    let y = arr[i].charAt(arr[i].length - 1);

    if (0 <= x && x <= 4) {
      if (x > y) {
        count += 3;
      }
      if (x === y) {
        count++;
      }
    }
  }
  return count;
}
countPoints([
  "3:1",
  "1:0",
  "0:0",
  "1:2",
  "4:0",
  "2:3",
  "1:1",
  "0:1",
  "2:11",
  "1:0",
]);
