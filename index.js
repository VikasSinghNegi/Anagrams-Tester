function is_anagram(stringA, stringB) {
  /*Remove any non-alphabet character using regex and convert       
  convert the strings to lowercase. */
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
  return sortString(stringA) === sortString(stringB);
}

/*This function sorts the strings*/

function sortString(string) {
  return string
    .split('')
    .sort()
    .join('');
}

const appDiv = document.getElementById('app');
appDiv.innerHTML = `
is_anagram('cellar', 'recall'): ${is_anagram('cellar', 'recall')} <br />
is_anagram('arm', 'elbow'): ${is_anagram('arm', 'elbow')}`;
