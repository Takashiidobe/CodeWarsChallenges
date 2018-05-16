function XO(str) {
    let strToLowerCase = str.toLowerCase();
    let xCount = 0;
    let oCount = 0;
    let xPos = strToLowerCase.indexOf('x');
    let oPos = strToLowerCase.indexOf('o');
    while (xPos != -1) {
      xCount++;
      xPos = strToLowerCase.indexOf('x', xPos + 1);
      }
    while (oPos != -1) {
      oCount++;
      oPos = strToLowerCase.indexOf('o', oPos + 1);
      }
      if (oCount === xCount) {
        return true;
      }
      else {
        return false;
      }
}