var capitaljs = require('capitaljs');

function getAmortization(req, res) {
  var amount = req.query.amount;
  var rate = req.query.rate;
  var totalTerm = req.query.totalTerm;
  var amortizeTerm = req.query.amortizeTerm;

  var result = capitaljs.amortization({
    amount: amount,
    rate: rate,
    totalTerm: totalTerm,
    amortizeTerm: amortizeTerm
  });

  res.json(result);
}

module.exports = getAmortization;
