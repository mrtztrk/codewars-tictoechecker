function isSolved(board) {
  board = board.join("-").replace(/,/g, "");
  console.log(board);
  if (/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
  if (/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
  if (/0/.test(board)) return -1;
  return 0;
}

isSolved([
  [1, 2, 1],
  [1, 1, 2],
  [2, 1, 2],
]);

// function score(dice) {
//   let diceValues = [
//     ["1,1,1", 1000],
//     ["6,6,6", 600],
//     ["5,5,5", 500],
//     ["4,4,4", 400],
//     ["3,3,3", 300],
//     ["2,2,2", 200],
//     ["1", 100],
//     ["5", 50],
//   ];
//   let sorted = dice.sort().join(",");

//   console.log(sorted);
//   let sum = 0;

//   diceValues.forEach((v, i, a) => {
//     while (sorted.includes(v[0])) {
//       console.log(v[0]);
//       sorted = sorted.replace(v[0], "matchedNumber");
//       console.log(sorted);
//       sum += v[1];
//       console.log(sum);
//     }
//   });
//   return sum;
// }

//score([1, 1, 1, 3, 4, 3, 5]);
