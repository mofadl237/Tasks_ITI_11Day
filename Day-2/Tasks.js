/************************** 1-Convert Binary For Octal && Decimal */
let numBinary = 1000;

// 1- check number binary or no
function checkBinaryOrNot(num) {
  return String(num).split("").every((i) => i <= 1 && i >= 0);
}
// console.log("Check ==> ",checkBinaryOrNot(numBinary))

// 2- check number ==3 or Equevelant
function FormateConvertNumber(num){
	num = String(num).split('').reverse()
	while(num.length % 3 != 0){
    num.push('0')
  }
  return num
}
//  console.log("FormateConvertNumber ===> ",FormateConvertNumber(numBinary))

// 3- multiplication for each digit for 2 i & sum Each 3 digit for one digit
function ConvertBinaryToOctal(num) {
  if (!checkBinaryOrNot(num)) {
    return " Cant Convert To Octal ";
  }

  // Handle All Variable For Later
  let number = FormateConvertNumber(numBinary);

  let convertNumber = "";
  let power = 0;
  let currentNumber = 0;

  for (let i = 0 ; i <number.length ; i++) {
    currentNumber += number[i] * 2 ** power;
    power++;
    
    // Check Power and Convert
    if (power == 3) {
      power = 0;
      convertNumber += currentNumber;
      currentNumber = 0;
    }
  }
  return String(convertNumber).split('').reverse().join('');
}

console.log(ConvertBinaryToOctal(numBinary));


/********
 * 1 - write js code to convert a string into Pascal Case :
	ex:
		input: "ali mohamed"
		output: "Ali Mohamed" 
*/
