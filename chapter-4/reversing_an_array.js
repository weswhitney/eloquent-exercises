function reverseArray(arr) {
	var newArr = [];
	var arrLength = arr.length;
	for (var i = 0; i <= arrLength - 1; i++) {
		newArr.push(arr.pop());
	}
		// console.log(newArr);
		// console.log(arr);
	return newArr;
}

function reverseArrayInPlace(arr) {
	var increment = 0;
	for (var i = 0; i <= arr.length - 1; i++) {
		// var step = 1;
		arr[i] = arr[arr.length - increment];
		increment = increment + 1;
		// step = step + i;
		console.log(increment);
		console.log(arr[i]);
	// return sameReversedArray;
	}
		console.log(arr);
}
var testArr = [1, 2, 3, 4, 5];
console.log(reverseArray(['q', 'b', 'c']));
console.log(testArr);

reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7])