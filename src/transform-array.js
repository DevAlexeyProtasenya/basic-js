const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];
  let check = NaN;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === "--discard-next" && i !== arr.length - 1){
      check = i+1;
      i++;
    } else if(arr[i] === "--discard-prev" && result.length !== 0){
      if(check !== i-1){
        result.pop();
      }
    } else if(arr[i] === "--double-next" && i !== arr.length - 1){
      result.push(arr[i + 1]);
    } else if(arr[i] === "--double-prev" && result.length !== 0){      
      if(check !== i-1){
        result.push(result[result.length - 1]);
      }
    } else if(arr[i] !== "--discard-next" && arr[i] !== "--discard-prev" && arr[i] !== "--double-next" && arr[i] !== "--double-prev"){
      result.push(arr[i]);
    }
  };
  return result;
};
