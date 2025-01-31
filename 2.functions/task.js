function getArrayParams(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	let avg = +((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length !== 0) {
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return sum
	} else {
		return 0;
	}
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	let result = max - min;
	return result;

}

function differenceEvenOddWorker(...arr) {
	if (!arr.length) return 0;
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	let result = sumEvenElement - sumOddElement;
	return result;
}

function averageEvenElementsWorker(...arr) {
	if (!arr.length) return 0;
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	if (countEvenElement === 0) return 0;
	let result = +((sumEvenElement / countEvenElement).toFixed(2));
	return result;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}