const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const reverseHJ = letters.map(ls => ls.reverse().join(''));
  
    for (let l of reverseHJ) {
      if (l.includes(word)) return true;
  }
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
  
    let result = [];
    for (let row = 0; row < letters.length; row++) {
      result[row] = [];
      for (let col = 0; col < letters.length; col++) {
        result[row][col] = letters[col][row];
      }
    }

    const verticalJoin = result.map(ls => ls.join(''));
    const reverseVJ = result.map(ls => ls.reverse().join(''));
  
    for (let l of verticalJoin) {
        if (l.includes(word)) return true;
    }
  
    for (let l of reverseVJ) {
      if (l.includes(word)) return true;
  }
  
    return false;
  };
  
  module.exports = wordSearch;