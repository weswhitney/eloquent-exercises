function range(start, end, step) {
	var rangeArr = [];

	if (start === end) {
		return rangeArr;
	}

	var leftTerm = Math.max(start, end);
	var rightTerm = Math.min(start, end);
	var loops = leftTerm - rightTerm;
	if (step === undefined) {
		step = 1;
	}
	if (start < end) {
	for (var i = 0; i <= loops; i++) {
		var nextNum = 0;
		nextNum = nextNum + rightTerm;
		rightTerm += step;
		rangeArr.push(nextNum);
	}
	} else {
	for (var i = 0; i <= loops; i++) {
		var nextNum = 0;
		nextNum = nextNum + leftTerm;
		leftTerm -= step;
		rangeArr.push(nextNum);
	}
	}

	console.log(rangeArr);
}

function sum(rangeArr) {
	var sum = 0;
	for (var i = 0; i <= rangeArr.length - 1; i++) {
		sum = sum + rangeArr[i];
	}
	console.log(sum);
}

range(5, 2, 2);

