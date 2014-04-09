var MonthlyRateCalc = function(principal, interestRate, months) {
  'use strict';

  var monthlyInterest = (interestRate/100)/12,
      calculate;

  calculate = principal * (monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -(months))));

  return roundValue(calculate);

  function roundValue(num) {
    return num.toFixed(2);
  }
};

module.exports = MonthlyRateCalc;