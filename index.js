function shout(word) {
  return word.toUpperCase();
}

function whisper(word) {
  return word.toLowerCase();
}

function logShout(word) {
  console.log(word.toUpperCase());
}

function logWhisper(word) {
  console.log(word.toLowerCase());
}

function sayHiToGrandma (word) {
  if (word === word.toLowerCase()) {
    return "I can't hear you!"
  } else if(word === word.toUpperCase()) {
    return  "YES INDEED!"
  } else {
<<<<<<< HEAD
    return "I love you, too."
=======
    return
>>>>>>> 67f710004d4f0a1d9c00281593df1bffa71fd89b
  }
}