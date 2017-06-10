// position variables
const hash = '#', space = ' ', newLine = '\n';
// grid variables
var board = '', size = 31;
// loop through the finished lines
for (var i = 0; i < size; i++) {
	// loop through the individual lines
	for (var j = 0; j < size; j++) {
		// alternate hashtag and space
		if ((j + i) % 2 === 0) {
			board += space;
		} else {
			board += hash;
		}
	}
	// start a new finished line
	board += newLine;
}
// display the board
console.log(board);
