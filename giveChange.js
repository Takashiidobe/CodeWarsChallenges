function giveChange(amount) {
	if (amount >= 20.00) {
		console.log('Here\'s a 20 dollar bill');
		return amount - 20;
	}
	else if (amount >= 10.00) {
		console.log('Here\'s a 10 dollar bill');
		return amount - 10;
	}
	else if (amount >= 5.00) {
		console.log('Here\'s a 5 dollar bill');
		return amount - 5;
	}
	else if (amount >= 1.00) {
		console.log('Here\'s a 1 dollar bill');
		return amount - 1;
	}
	else if (amount >= .25) {
		console.log('Here\'s a quarter');
		return amount - .25;
	}
	else if (amount >= .10) {
		console.log('Here\'s a dime');
		return amount - .10;
	}
	else if (amount >= .05) {
		console.log('Here\'s a nickel');
		return amount -.05;
	}
	else if (amount >= .01) {
		console.log('Here\'s a nickel');
		return amount -.01;
	}
}