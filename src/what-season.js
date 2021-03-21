const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof date === 'undefined'){
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date)) {
    console.log(date.toLocaleDateString())
    throw new Error('Not a Date');
  }
  try{
    let check = date.toLocaleDateString();
  } catch (e){
    throw new Error('Not a Date');
  }
  let result = '';
  if(date.getMonth() === 11 || date.getMonth() <= 1){
    result += "winter";
  } else if(date.getMonth() >= 2 && date.getMonth() <= 4){
    result += "spring";
  } else if(date.getMonth() >= 5 && date.getMonth() <= 7){
    result += "summer";
  } else if(date.getMonth() >= 8 && date.getMonth() <= 10){
    result += "fall";
  }
  return result;
};