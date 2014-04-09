var MonthlyRateCalculator = function(principal, interestRate, months) {
  'use strict';

  var monthlyInterest = (interestRate/100)/12;

  return principal * (monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -(months))));
};

module.exports = MonthlyRateCalculator;