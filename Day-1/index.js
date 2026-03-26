// var Image = prompt("Enter Image Name (Book ,Boy ,Girl ,Pen) ", "Book");
// var Color = prompt("Enter Color Name As (Red ,Green ,...) ", "red");

// // Return Day 1 From Nadia
// document.write(
//   '<p style="color:' + Color + ' ;   ">This Is ' + Image + " </p>"
// );
// document.write(
//   '<div style="border: 2px solid ' +
//     Color +
//     ';">\
//     <img  style="width:200px ;" src ="./Images/' +
//     Image +
//     '.png" />\
//     </div> '
// );

// 1- Data Type
/**
 * 1- Premetive Data Type ===>
 *  ------> 7 (Number , string ,boolean, null ,undefined , (bigint , symbol) )
 * 
 * 2- Non -Premetive (object,array ,date)
 * Found Oject Type(BOM ,DOM)
 * 
 * 
//  * 3- User Defined (class) Not Found Because is Function
 */

var x = 4;
x.sayHello=()=>{
    return 5
}
var y = new Number(5);
console.log(x);
console.log(y.valueOf());
console.log(x.sayHello)