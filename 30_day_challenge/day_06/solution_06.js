//Author: Jose Dimas
//Github: github.com/joecdimas/

function processData(input) {
  //Enter your code here
//My Solution
  let inputCopy = input.split('\n').slice(1);

  inputCopy.forEach((str) => {
      var fhalf = '';
      var shalf= ''; 
      for (let i=0 ; i < str.length;  i++){
              ( i % 2 === 0)  ? fhalf+=str[i] : shalf+=str[i]
          }  
          console.log(fhalf+ " "+ shalf); 
      });
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
