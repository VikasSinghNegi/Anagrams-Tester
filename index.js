function is_anagram(stringA, stringB) {
  /*Remove any non-alphabet character using regex and convert       
  convert the strings to lowercase. */
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase()
  return sortString(stringA) === sortString(stringB)
}

/*This function sorts the strings*/ 
function sortString(string) {
  return string.split('').sort().join('');
}

console.log(is_anagram('cellar', 'recall'));  //returns True
console.log(is_anagram('arm', 'elbow'));      //returns False
