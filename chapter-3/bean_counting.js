function countBs(str) {
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) === 66) {
			count++;
		}
	}
	console.log(count);
};

function countChar(str, character) {
	var count = 0;
	var charCode = character.charCodeAt(0);
	for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) === charCode) {
			count++;
		}
	}
	console.log(count);
};

countChar("sS bBBBBB", "s");

