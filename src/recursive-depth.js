const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    if(arr instanceof Array){
      let maxDepth = 1;
      let depth = 1;
      arr.forEach(element => {
        depth = this.calculateDepth(element) + 1;
        if (maxDepth < depth) {
          maxDepth = depth;
        };
      });
      if(arr === []){
        return 1;
      }
      return maxDepth;
    } else {
      return 0;
    }
  }
}