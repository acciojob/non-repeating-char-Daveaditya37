function firstNonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (str.indexOf(c) == i && str.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 