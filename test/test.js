var LoanCalc = require('../index.js');

// test that we're calculating the correct monthly payment
exports['A 30 year, $100,000 loan with a 6% interest rate should be repaid at $599.55 per month'] = function (test) {
  test.equal(LoanCalc.paymentCalc(100000, 6, 360), 599.55);
  test.done();
};

exports['A 15 year, $200,000 loan with a 5% interest rate should be repaid at $1,581.59 per month'] = function (test) {
  test.equal(LoanCalc.paymentCalc(200000, 5, 180), 1581.59);
  test.done();
};

// test that we're calculating the correct total interest paid
exports['A 30 year, $200,000 loan with a 5% interest rate should have a total interest of $186,511.57'] = function (test) {
  test.equal(LoanCalc.totalInterest(200000, 5, 360), 186511.57);
  test.done();
};

exports['A 40 year, $200,000 loan with a 5% interest rate should have a total interest of $262,908.74'] = function (test) {
  test.equal(LoanCalc.totalInterest(200000, 5, 480), 262908.74);
  test.done();
};

// error checks
exports['Throw an error if a string is passed'] = function (test) {
  test.throws(function() {
    LoanCalc.paymentCalc('hello', 5, 360);
    Loancalc.paymentCalc('100000', 'test', 180);
    Loancalc.paymentCalc(10000, 5, '360');
  },
  Error, 'Must pass a number');
  test.done();
};

exports['Throw an error if a negative value is passed'] = function (test) {
  test.throws(function() {
    LoanCalc.paymentCalc(-300000, 5, 360);
  },
  Error, 'Must pass a positive number');
  test.done();
};