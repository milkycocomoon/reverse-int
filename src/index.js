module.exports = function reverse (n) {
    result = parseFloat(n.toString().split('').reverse().join(''));
    if (n[0] % 2 === 0){
      return result * -1;
    }
    return result
}
