// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement= "I am a hard working person";

let reversedStatement = "";

const words = statement.split(" ");

for (let i = words.length - 1; i >= 0; i--) {
  reversedStatement += words[i] + " ";
}

console.log(reversedStatement);