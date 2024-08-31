function firstNonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return "c";
    }
  }
  return "null";
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
