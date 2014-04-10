[![Build Status](https://travis-ci.org/ascott1/loan-calc.svg?branch=master)](https://travis-ci.org/ascott1/loan-calc)

Quickly calculate monthly payments and the total amount of interest paid for a fixed rate loan.

## Installation

First install [node.js](http://nodejs.org/). Then:

```sh
npm install loan-calc --save
```

## Usage

Require the module and pass the amount of the loan, annual rate, and length of loan in months.

```javascript
var LoanCalc = require('loan-calc');

LoanCalc.paymentCalc({
    amount: 200000,
    rate: 5,
    termMonths: 360
});
// returns 964.39

LoanCalc.totalInterest({
    amount: 200000,
    rate: 5,
    termMonths: 360
});
// returns 262908.74
```


