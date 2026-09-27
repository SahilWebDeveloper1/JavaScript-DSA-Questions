/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let newString = ""
    let regex = /\(([^()]+)\)/;
    let match;

    if(!/[()]/.test(s)) {
        newString = s
    }
    else{
        
    // This loop give the replaced value in "newString" and changes the "s" 
    // and the last parantheses will comes out then we retruned it as "newString"
        while (s.includes("()")){
            s = s.replace("()", "")
        }
        while ((match = regex.exec(s))) {
        let intermediate = match[1].split("").reverse().join("")
        s = s.replace(match[0], intermediate); 
        }
        newString = s
    }
    
return newString
};