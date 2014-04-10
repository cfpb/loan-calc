[![Build Status](https://travis-ci.org/ascott1/loan-calc.svg?branch=master)](https://travis-ci.org/ascott1/loan-calc)

Quickly calculate monthly payments and the total amount of interest paid for a fixed rate loan.

## Usage

Require the module and pass the amount of the loan, annual rate, and length of loan in months. So for a 5 year loan:

```javascript
var LoanCalc = require('loan-calc');

LoanCalc.paymentCalc(200000, 5, 360);
// returns 964.39

LoanCalc.totalInterest(200000, 5, 360);
// returns 262908.74
```


