/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let count = 0
    let result = []

    for(let i = 0; i< seq.length; i++){
        if(seq[i] === "("){
            result.push(count % 2);
            count++
        }
        else if(seq[i] === ")"){
            count--
            result.push(count % 2);
        }
    }
    return result
};