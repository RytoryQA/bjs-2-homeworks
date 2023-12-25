"use strict";

function solveEquation(a, b, c) {
  let result = [];
  let d = b ** 2 - 4 * a * c;

  if (d === 0) {
    result.push(-b / (2 * a));
  } else if (d > 0) {
    result.push((-b + Math.sqrt(d)) / (2 * a));
    result.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return result;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if (Number.isNaN(percent) || Number.isNaN(contribution) || Number.isNaN(amount) || Number.isNaN(countMonths)) {
    return false;
  }

  let bodyCredit = amount - contribution;
  let percentMonth = (percent / 12) / 100;

  let monthPayment = bodyCredit * (percentMonth + (percentMonth / ((Math.pow((1 + percentMonth), countMonths)) - 1)));
  let result = (monthPayment * countMonths).toFixed(2);

  return +result;
}