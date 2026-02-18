//  Write a javascript code to reverse the array colors without using the reverse method.

const  colors = ['red', 'green', 'blue', 'yellow', 'orange'];

let reversedColors = [];
for (let i=colors.length-1;i>=0;i--){
  reversedColors.push(colors[i]);
}
console.log(reversedColors)