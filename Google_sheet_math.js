
//find the dot product of two vectors
function dot_product(a,b) {
  Array.prototype.sum = function(selector) {
    if (typeof selector !== 'function') {
      selector = function(item) {
        return item;
      }
    }
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
      sum += selector(this[i]);
    }
    return sum;
  };
  var c = new Array(a.length);
  
  for (var i=0;i<a.length;i++){
    c[i] = a[i]*b[i]
  }
  return c.sum()
}


//find the length of a vector
function getlength(a) {
  return a.length
}