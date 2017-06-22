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
	var increment = 1;
	for (var i = 0; i <= (arr.length - 1) / 2; i++) {
		console.log('increment ', increment);
		var oldValue = arr[i];
		arr[i] = arr[arr.length - increment];
		arr[arr.length - increment] = oldValue;
		increment = increment + 1;
		console.log('setting the index to ', arr[i]);
		console.log('array ', arr);
	}
		console.log('output ', arr);
}

reverseArrayInPlace(["t", "r", "a", "f"]);