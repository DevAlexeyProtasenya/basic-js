const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  let count = 0;
  matrix.forEach(element => {
    element.forEach(el => {
      if (el === "^^"){
        count++;
      }
    })
  });
  return count;
};
