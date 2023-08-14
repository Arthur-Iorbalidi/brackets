module.exports = function check(str, bracketsConfig) {
  let stack = [];

  let bracketMap = new Map(bracketsConfig);

  for (let char of str) {
      if (bracketMap.has(char) && (stack.length === 0 || stack[stack.length - 1] !== char)) {
        stack.push(char);
      } else if (stack.length === 0 || char !== bracketMap.get(stack.pop())) { 
        return false;
      }
  }

  return stack.length === 0;
}
