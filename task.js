"use strict";

function solveEquation(a, b, c) {
  let arr = [];

  let d = b ** 2 - 4 * a * c;

  if (d < 0) {

    arr = [];

  } else if (d === 0) {

    let x1 = -b / (2 * a);

    arr.push(x1);
  }

  if (d > 0) {

		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);

		arr.push(x1, x2);
	}
  
  return arr;
};



function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let monthlyPercent = percent / 100 / 12;
	let totalAmount;
	let monthly;
	let bodyCredit;

	if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount)) {
		const bodyCredit = amount - contribution;
		const monthly = bodyCredit * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
		const totalAmount = parseFloat((monthly * countMonths).toFixed(2));
		return totalAmount;
	}

	return false;
};