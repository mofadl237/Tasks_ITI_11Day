/************************** 1-Convert Binary For Octal && Decimal */
//Can Execute in Browser , Get And Validation Number from user and print this
let numBinary = 1000101010001;

// 1- check number binary or no
function checkBinaryOrNot(num) {
  return String(num)
    .split("")
    .every((i) => i <= 1 && i >= 0);
}
// console.log("Check ==> ",checkBinaryOrNot(numBinary))

// 2- check number ==3 or Equevelant
function FormateConvertNumber(num) {
  num = String(num).split("").reverse();
  while (num.length % 3 != 0) {
    num.push("0");
  }
  return num;
}
//  console.log("FormateConvertNumber ===> ",FormateConvertNumber(numBinary))

// 3- multiplication for each digit for 2 i & sum Each 3 digit for one digit
function ConvertBinaryToOctal(num) {
  if (!checkBinaryOrNot(num)) {
    return " Cant Convert To Octal ";
  }

  // Handle All Variable For Later
  let number = FormateConvertNumber(numBinary);

  let convertNumber = [];
  let power = 0;
  let currentNumber = 0;

  for (let i = 0; i < number.length; i++) {
    currentNumber += number[i] * 2 ** power;
    power++;

    // Check Power and Convert
    if (power == 3) {
      power = 0;
      convertNumber.unshift(currentNumber);
      currentNumber = 0;
    }
  }
  return convertNumber.join("");
}

console.log(ConvertBinaryToOctal(numBinary));

/********
 * 1 - write js code to convert a string into Pascal Case :
	ex:
		input: "ali mohamed"
		output: "Ali Mohamed" 
*/

/**
 * 3- Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. (Bonus)
//Example : 'Web Development Tutorial'
//Output : 'Development'
4- Write a JavaScript function which accept a string as input and swap the case of each character.
//Example : 'Egypt'
//Output : 'eGYPT'
5- Write a JavaScript function to extract unique characters from a string.
//Example : "thequickbrownfoxjumpsoverthelazydog"
//Output : "thequickbrownfxjmpsvlazydg"
6- Write a JavaScript function to Display Random value from 0 to 9 (Use Math Object) 7- Write a JavaScript program to find the area of Circle where the radius is 5
The area of a circle is π (Pi) times the Radius squared (Use Math Object)
 */
