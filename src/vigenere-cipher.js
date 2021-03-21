const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  type = true;

  constructor(typeValue) {
    if (typeof type !== 'undefind') {
      this.type = typeValue;
    }
  }

  encrypt(message, key) {
    if (typeof message === "undefined" || typeof key === "undefined") {
      throw new Error('Message or key are invalid');
    }
    let messageArr = [];
    if (this.type === false) {
      messageArr = message.toUpperCase().split("").reverse();
    } else {
      messageArr = message.toUpperCase().split("");
    }
    let keyArr = key.toUpperCase().split("");
    let result = "";
    for (let i = 0; i < messageArr.length; i++) {
      let mesPos = messageArr[i].charCodeAt(0) - 65;
      let keyPos = keyArr[i % keyArr.length].charCodeAt(0) - 65;

      if(mesPos >= 0 && mesPos <=25){
        result += String.fromCharCode((mesPos + keyPos) % 26 + 65);
      } else {
        result += String.fromCharCode(mesPos + 65);
        i--;
        messageArr.shift();
      } 
    }
    return result;
  }

  decrypt(encriptedMessage, key) {
    if (typeof encriptedMessage === "undefined" || typeof key === "undefined") {
      throw new Error('Message or key are invalid');
    }
    let messageArr = [];
    if (this.type === false) {
      messageArr = encriptedMessage.toUpperCase().split("").reverse();
    } else {
      messageArr = encriptedMessage.toUpperCase().split("");
    }
    let keyArr = key.toUpperCase().split("");
    let result = "";
    for (let i = 0; i < messageArr.length; i++) {
      let mesPos = messageArr[i].charCodeAt(0) - 65;
      let keyPos = keyArr[i % keyArr.length].charCodeAt(0) - 65;
      if(mesPos >= 0 && mesPos <=25){
        result += String.fromCharCode((mesPos - keyPos >= 0 ? mesPos - keyPos : mesPos - keyPos + 26) % 26 + 65);
      } else {
        result += String.fromCharCode(mesPos + 65);
        i--;
        messageArr.shift();
      } 
    }
    return result;
  }
}

const directMachine = new VigenereCipheringMachine();
console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));

module.exports = VigenereCipheringMachine;
