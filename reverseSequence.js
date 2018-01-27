const reverseSeq = n => {
var list = [];
  while (n > 0) {
  list.push(n--);
  }
  return list;
}