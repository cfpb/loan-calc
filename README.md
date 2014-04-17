[![Build Status](https://travis-ci.org/cfpb/loan-calc.svg?branch=master)](https://travis-ci.org/cfpb/loan-calc)

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
    termMonths: 180
});
// returns 1581.59

LoanCalc.totalInterest({
    amount: 200000,
    rate: 5,
    termMonths: 360
});
// returns 186511.57
```

You can also pass the loan amount as a US currency formatted string:

```javascript
LoanCalc.paymentCalc({
    amount: '$200,000',
    rate: 5,
    termMonths: 180
});
// returns 1581.59
```

## Contributing

Please read the [Contributing guidelines](CONTRIBUTING.md).

### Running Tests

We are using [nodeunit](https://github.com/caolan/nodeunit) to test. To run tests, first install nodeunit and any dependencies via npm:

```
npm install
```

Run tests with:

```
npm test
```
