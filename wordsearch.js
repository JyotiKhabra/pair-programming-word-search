//pairpgrammed with justin and stacey

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
}
module.exports = wordSearch
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    return false;
  }
  
  const transpose = function(letters) {
    let newArr = []
    for (let x = 0; x < letters[0].length; x++) {
      for (let y = 0; y < letters.length; y++) {
        if (letters[y])
       newArr += (letters[y][x]) + " ";
      }
      newArr += "\n";
    }
   return newArr.trim();
  };
  
  const wordsToSearch = [
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ]
  const secondmatrix = transpose(wordsToSearch)
  let testingarr = []
  let temparr = []
  const testing  = secondmatrix.split(" ").join("").split('/n')  
  let index = 0
  for (let j = 0; j < wordsToSearch.length; j++) {
    temparr = []
    for (let i = 0; i < wordsToSearch[0].length; i++) {
      temparr.push(testing.slice(index, index + 1))
      index++
    }
    testingarr.push(temparr)
  }
  console.log(wordSearch(testingarr[0], 'LARRY'))

  

