//Author: Jose Dimas
//Github: github.com/joecdimas/

function processData(input) {
//My solution
  var tempArray = input.split("\n"); //temp array that will be the key and value for the map
  const number = Number.parseInt(tempArray[0]); //gets the first number
  var searchArray = input.split("\n"); //this will be the search array
  
  tempArray.shift(); //moves the 1st item out of the array
  tempArray.splice(number);

  searchArray= searchArray.splice(number +1,number *2 + 1 );

  for (var i = 0; i < number; i++) {
      tempArray[i] = tempArray[i].split(" ");//split the names from the phones to prepare for mapping
}
  var phoneBookMap = new Map(tempArray);//turn the array into a map

  for (let i = 0; i < searchArray.length; i++){
      if (phoneBookMap.has(searchArray[i]))
          console.log(`${searchArray[i]}=${phoneBookMap.get(searchArray[i])}`)
          else
              console.log("Not found")
  }
//  
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});
