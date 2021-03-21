const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (typeof position !== "number" || position - 1 > this.getLength() || position - 1 < 0) {
      this.chain = [];
      throw new Error("Position is not valid");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = "";
    if (this.getLength() === 1) {
      result = `( ${this.chain[0]} )`;
      this.chain = [];
      return result;
    }
    for (let i = 0; i < this.getLength(); i++) {
      if (i === 0) {
        result += `( ${this.chain[i]} )~`;
      } else if (i === this.getLength() - 1) {
        result += `~( ${this.chain[i]} )`;
      } else {
        result += `~( ${this.chain[i]} )~`;
      }
    }

    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
