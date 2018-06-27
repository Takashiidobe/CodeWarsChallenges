function f(n) {
  const arr = [];
  if (n > 1 && Math.floor(n) === n) {
    //populate the array;
    for (i = 0; i < n; i++) {
      arr.push(i + 1);
    }
  } else if (n > 1 && n < 2) {
    return 1;
  } else {
    return false;
  }

  if (arr.length > 1) {
    return arr.reduce((a, b) => a + b);
  }
}
