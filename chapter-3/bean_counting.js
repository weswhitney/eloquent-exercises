function countBs(str) {
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) === 66) {
			count++;
		}
	}
	console.log(count);
};
