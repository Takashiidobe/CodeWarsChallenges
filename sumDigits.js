function sumDigits(number) {
  var x = number
    .toString()
    .replace(/-/g, "")
    .split("");
  var y = x.map(x => Math.abs(x));
  if (y.length === 1) {
    return y[0];
  } else {
    return y.reduce((a, b) => a + b);
  }
}
