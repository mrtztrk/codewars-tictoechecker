const arr = [
  // [0, 0, 1],
  // [0, 1, 2],
  // [2, 1, 0],
  // [1, 1, 1],
  // [1, 1, 2],
  // [2, 1, 2],
  [1, 2, 1],
  [1, 1, 2],
  [2, 1, 2],
];

// arr[0] check if there is 0 var mı arr[1] ve arr[2]

const checkArr = (arr) => {
  // oyun bitti mi check

  // oyun bitmedi devam
  // yanyana kondisyonlar
  for (let i = 0; i < 3; i++) {
    if (arr[i].every((el) => el === 1)) {
      return 1;
    }
    if (arr[i].every((el) => el === 2)) {
      return 2;
    }
  }

  // yukarıdan aşağı kondisyonlar

  if (
    (arr[0][0] === 1 && arr[1][0] === 1 && arr[2][0] === 1) ||
    (arr[0][1] === 1 && arr[1][1] === 1 && arr[2][1] === 1) ||
    (arr[0][2] === 1 && arr[1][2] === 1 && arr[2][2] === 1)
  ) {
    return 1;
  }
  if (
    (arr[0][0] === 2 && arr[1][0] === 2 && arr[2][0] === 2) ||
    (arr[0][1] === 2 && arr[1][1] === 2 && arr[2][1] === 2) ||
    (arr[0][2] === 2 && arr[1][2] === 2 && arr[2][2] === 2)
  ) {
    return 2;
  }
  // capraz kondisyonlar
  if (
    (arr[0][0] === 1 && arr[1][1] === 1 && arr[2][2] === 1) ||
    (arr[0][2] === 1 && arr[1][1] === 1 && arr[2][0] === 1)
  ) {
    return 1;
  }
  if (
    (arr[0][0] === 2 && arr[1][1] === 2 && arr[2][2] === 2) ||
    (arr[0][2] === 2 && arr[1][1] === 2 && arr[2][0] === 2)
  ) {
    return 2;
  }
  for (let i = 0; i < 3; i++) {
    for (const item of arr[i]) {
      if (item === 0) {
        return -1;
      }
    }
  }
  return 0;
};
const finalResult = checkArr(arr);
console.log(finalResult);
// yanyana kondisyonlar
// if arr[0] every item ;===1 ise win x
// if arr[1] every item ;===1 ise win x
// if arr[2] every item ;===1 ise win x

// yukarıdan asagı kondisyonlar
// if arr[0][0] && arr[1][0] && arr[2][0] every item ;===1 ise win x
// if arr[0][1] && arr[1][1] && arr[2][1] every item ;===1 ise win x
// if arr[0][2] && arr[1][2] && arr[2][2] every item ;===1 ise win x

// capraz kondisyonlar
// if arr[0][0] && arr[1][1] && arr[2][2] every item ;===1 ise win x
// if arr[0][2] && arr[1][1] && arr[2][0] every item ;===1 ise win x
