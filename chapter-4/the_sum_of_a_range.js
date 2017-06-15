function range(start, end) {
	var rangeArr = [];
	if (start === end) {
		return rangeArr;
	}
	var leftSide = Math.max(start, end);
	var rightSide = Math.min(start, end);
	var loops = leftSide - rightSide;
	for (var i = 0; i <= loops; i++) {
		var nextNum = 0;
		nextNum = nextNum + rightSide;
		rightSide += 1;
		rangeArr.push(nextNum);
	}
	console.log(rangeArr);
	// return rangeArr; // returns an array containing all the numbers from start up to (and including) end
}

// function sum(numArr) {
// 	var sum = 0;
// 	return sum; // returns the sum of these numbers
// }

range(-1, -12);