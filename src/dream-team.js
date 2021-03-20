const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let dreamTeam = [];
    if (Array.isArray(members)){
        members.forEach(element => {
            if(typeof element === "string"){
                dreamTeam.push(element.trim().toUpperCase()[0]);
            }
        });
    } else {
        return false;
    }
    return dreamTeam.sort().join("");
};

