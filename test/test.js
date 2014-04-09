var MonthlyRateCalc = require('../index.js');

exports['calculate'] = function (test) {
  test.equal(MonthlyRateCalc(100000, 6, 360), 599.550525152759);
  console.log(MonthlyRateCalc(100000, 6, 360));
  test.done();
};