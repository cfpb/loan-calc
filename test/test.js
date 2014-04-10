var LoanCalc = require('../index.js');

exports['A 30 year, $100,000 loan with a 6% interest rate should be repaid at $599.55 per month'] = function (test) {
  test.equal(LoanCalc.paymentCalc(100000, 6, 360), 599.55);
  test.done();
};

exports['A 30 year, $200,000 loan with a 5% interest rate should have a total interest of $186,511.57'] = function (test) {
  test.equal(LoanCalc.totalInterest(200000, 5, 360), 186511.57);
  test.done();
};