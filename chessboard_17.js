// position variables
var hash = '#';
var space = ' ';
var board = '';
// grid variables
var size = 81;
var newLine = '\n';

for (var i = 0; i < size; i++) {
	for (var j = 0; j < size; j++) {
		if ((j + i) % 2 === 0) {
			board = board + space;
		} else {
			board = board + hash;
		}
	}
	board = board + newLine;
}
	console.log(board);
