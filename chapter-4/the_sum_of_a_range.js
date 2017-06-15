function range(start, end) {
	var rangeArr = [];
	if (start === end) {
		return rangeArr;
	}
	var leftTerm = Math.max(start, end);
	var rightTerm = Math.min(start, end);
	var loops = leftTerm - rightTerm;
	for (var i = 0; i <= loops; i++) {
		var nextNum = 0;
		nextNum = nextNum + rightTerm;
		rightTerm += 1;
		rangeArr.push(nextNum);
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