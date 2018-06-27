function isIsogram(str){
  var x = str.toLowerCase().split('');
  var y = Array.from(new Set(x));
  return x.length === y.length ? true : false;
}