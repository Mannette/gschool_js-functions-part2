function oldestPerson(people) {
  var oldest = "";
  // var keys = Object.keys(people);
  // for (var i = 0; i < keys.length; i++) {
  //   console.log(keys[i]);
  //   if (people.keys[i] > people.oldest) {
  //     oldest = keys[i];
  //   }
  // }
  for (var k in people) {
    // console.log(k);
    // console.log(people[k], people[oldest]);
    // console.log(k);
    if (oldest === "") {
      oldest = k;
    }
    if (people[k] > people[oldest]) {
      oldest = k;
      // console.log(oldest);
    }
  }
  // console.log(typeof k);
  return oldest;
}

var test = {'Ben':26, 'Ethan':23, 'Darryl':62};
console.log(oldestPerson(test));


function longestWord(str) {
  var word = "";
  var wordArray = str.split(" ");
  for (var i = 0; i < wordArray.length; i++) {
    // console.log(wordArray);
    if (wordArray[i].length > word.length) {
      word = wordArray[i];
    }
  }
  return word;
}

function factorial(x) {
  //x = Math.floor(Math.random() * 4 - 0);
  if (x === 0) {
    return 1;
  }
  if (x < 0) {
    return undefined;
  }
  for(var i = x; --i;) {
    x *= i;
  }
  return x;
}
console.log(factorial(4));
// should return 24