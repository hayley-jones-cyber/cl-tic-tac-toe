const readlineSync = require('readline-sync');

// create a board
const newBoard = () => {
  const result = [];
  let row = [];
  for (let i = 1; i <= 9; i += 1) {
    if (row.length < 3) {
      row.push(i);
    } else {
      result.push(row);
      row = [];
    }
  }
  return result;
};
