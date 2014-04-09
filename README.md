[![Build Status](https://travis-ci.org/ascott1/loan-calc.svg?branch=master)](https://travis-ci.org/ascott1/loan-calc)

Quickly calculate monthly payments for a fixed interest loan.

## Usage

Require the module and pass the principal (amount of loan), annual rate, and length of loan in months.

```javascript
var MonthlyRateCalc = require('loan-calc');
MonthlyRateCalc(200000, 5, 360);
```


