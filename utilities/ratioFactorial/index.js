const getFactorial = require("../factorial/index.js");
const getRatio = require("../ratio/index.js");

function ratioAndFactorial(num1, num2, num3) {
  const ratio = getRatio(num1, num2);
  const factorial = getFactorial(num3);

  return {
    ratio,
    factorial,
  };
}

module.exports = ratioAndFactorial;
