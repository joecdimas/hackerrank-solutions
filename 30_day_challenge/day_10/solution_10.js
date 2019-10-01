//Author: Jose Dimas
//Github: github.com/joecdimas/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

//My solution
function binary(s){
    let b = ''; //binary string
    let num = s; // original number
    var remainder;

    while(num > 0){
        remainder = num % 2;
        num = Math.floor(num/2);
        b += remainder ;
    }
    return b;  //returns the string
}

function main() {
    const n = parseInt(readLine(), 10);  
    //This bottom portion was my first attempt
    //let binaryString = binary(n);
    //Later learned that I could have done the bottom. 
    
    let binaryString = n.toString(2); // this converts the number to a string , base 2 (binary)
    var binaryArray = binaryString.split('0'); //Splits the numbers up on zero's, split returns an array. example: [1,1,1,0,0,1,1,0,1] --> ["111","11","1"]
    var max = Math.max(...binaryArray); //finds the largest number in the array., example: (111)
    console.log(max.toString().length); // 3
 //   
}
