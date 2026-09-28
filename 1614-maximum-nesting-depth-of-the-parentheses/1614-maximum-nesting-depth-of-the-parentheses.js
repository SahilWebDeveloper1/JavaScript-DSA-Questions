/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let noOfPara = 0
    const regex = /\(([^()]*)\)/g;
  while (regex.test(s)) {
    s = s.replace(regex, '|');
    noOfPara++
  }
  return noOfPara
};