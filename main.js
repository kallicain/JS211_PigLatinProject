'use strict';

// // brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
  e.preventDefault()
});

const output = document.getElementById("word-list")


let userInput = ""

const input = document.getElementById("user-input")
input.addEventListener("input", (event) => {
  userInput = event.target.value;
  console.log(event.target.value)
});

const translate = document.getElementById("translate")
translate.addEventListener("click", (e) => {
  let word = userInput;
  let result = pigLatin(word)
  output.innerHTML = result;
});

// should translate a simple word
// should translate a complex word
// should attach "yay" if word begins with vowel
// should lowercase and trim word before translation
const vowels = ['a', 'e', 'i', 'o', 'u']
let letterPosition = 0

const pigLatin = (word) => {
  word = word.toLowerCase().trim();3
  let firstLetter = word[0]
  if (vowels.includes(firstLetter)) {
    return word + 'yay'
  }
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      letterPosition = i
      break;
    }
  } 
  return word.slice(letterPosition) + word.slice(0, letterPosition) + 'ay';
}

// const populatePigLatin = () => {
//   const ol = document.getElementById("word-list");
//   const li = document.createElement("li");
//   const title = document.createTextNode(pig.title);
//   li.appendChild(title);
//   ol.appendChild(li);
// }


// const str = 'The quick brown fox jumps over the lazy dog.';
// console.log(str.slice(4, 19));
// Expected output: "quick brown fox



// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
// const getPrompt = () => {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
