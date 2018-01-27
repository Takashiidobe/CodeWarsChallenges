function collatz(number) {
if (number % 2 == 0) {
	console.log(number / 2); 
	return number / 2;
}
else if (number % 2 != 0) {
	result = number * 3 + 1; 
	console.log(result);
	return result;
}
}
var n = prompt('Put in a number');
while (n != 1) {
	n = collatz(n);
}