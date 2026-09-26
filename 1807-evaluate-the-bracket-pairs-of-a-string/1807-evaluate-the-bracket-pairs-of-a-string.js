/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    const knowledgeValues = Object.fromEntries(knowledge)
    const result = s.replace(/\(([^)]+)\)/g, (match, key) => knowledgeValues[key]);
    const finalResult = result.replaceAll("undefined", "?")
    return finalResult
};