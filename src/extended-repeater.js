const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let defaultValue = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 1,
    additionSeparator: "|"
  }

  for (let element in options){
    if(typeof options[element] !== "undefined"){
      defaultValue[element] = options[element];
    }
  }  

  addition = String(defaultValue["addition"]);
  for(i = 0; i < defaultValue["additionRepeatTimes"] - 1; i++){
    addition += defaultValue["additionSeparator"] + String(defaultValue["addition"])
  }
  let result = str+addition;
  for(i = 0; i < defaultValue["repeatTimes"] - 1; i++){
    result += defaultValue["separator"] + str + addition; 
  }
  return result;
};