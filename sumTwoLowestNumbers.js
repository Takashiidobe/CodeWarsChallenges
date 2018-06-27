function sumTwoSmallestNumbers(numbers) {  
  let x = numbers.sort((a, b) => {
    return a - b > 0;
    });
  let y = x.slice(0, 2);
  return y.reduce((a, b) => a + b);
};