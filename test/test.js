var MonthlyRateCalculator = require('../index.js');

exports['calculate'] = function (test) {
    test.equal(MonthlyRateCalculator(100000, 6, 360), 599.550525152759);
    console.log(MonthlyRateCalculator(100000, 6, 360));
    test.done();
};