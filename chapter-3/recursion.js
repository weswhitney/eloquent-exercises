function isEven(number) {
	if (number >= 0) {
		if (number === 0) {
			return true;
		} else if (number === 1) {
			return false;
		} else {
			number = number - 2;
			return isEven(number);
		}
		return isEven(number);
	} else if (number < 0){
		if (number === 0) {
			return true;
		} else if (number === -1) {
			return false;
		} else {
			number = number + 2;
			return isEven(number);
		}
	return isEven(number);
	}
	// return boolean;
}