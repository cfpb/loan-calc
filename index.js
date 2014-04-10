'use strict';

// pass the amount of the loan, percentage rate, and length of the loan in months
exports.paymentCalc = function(loanAmt, loanRate, loanTerm) {
  // calculate monthly payment
  var monthlyPayment = paymentCalc(loanAmt, loanRate, loanTerm);

  // round the payment to two decimal places
  return roundNum(monthlyPayment);
};

exports.totalInterest = function(loanAmt, loanRate, loanTerm) {
  // calculate the momthly payment
  var monthlyPayment = paymentCalc(loanAmt, loanRate, loanTerm);

  // subtract the original loan amount from the total amount paid to get the raw interest paid
  var rawInterest = (monthlyPayment * loanTerm) - loanAmt;

  // round the value to two decimal places
  return roundNum(rawInterest);
};

// calculate the raw monthly payment
var paymentCalc = function(loanAmt, loanRate, loanTerm) {
  // monthly interest rate
  var monthlyRate = (loanRate/100)/12;

  // calculate the monthly payment
  // MonthlyPayment = Pincipal * ( MonthlyInterest / (1 - (1 + MonthlyInterest)^ -Months))
  return loanAmt * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -(loanTerm))));
};

var roundNum = function(num) {
  return num.toFixed(2);
}