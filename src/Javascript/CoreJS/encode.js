const encode = (s) => {
  let output = "";
  let count = 0;
  let previousChar = "";
  if (s) {
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (!previousChar || previousChar === char) {
        count++;
        previousChar = char;
      } else {
        output += `${count}${previousChar}`;
        previousChar = char;
        count = 1;
      }
      if (i === s.length - 1) {
        output += `${count}${previousChar}`;
      }
    }
  }
  return output;
};

console.log(encode("aaaabbbcccdd"));
