// // mutable && immutable  ===>  string
// var str ="DD";
// str[0]="A";
// var strObj =new String("DD")
// strObj[0]='AA'
// console.log(str)
// console.log(strObj.valueOf())
/**            2- Array  */
// 1- String Methods
/**
 * substr(position,length) ==> return new string 
 * substring(index start,index end?)not include End && Not Negative number =>start 0
 * slice(start index ,end) Swap ,negative number 
 * 
 */
var name = "mohamed Fadl";
console.log(name.substr(0,4))   // "moha" ==> from index (0),length(4)
console.log(name.substring(0,4))   // "moha" ==> from index (0),end index(4) not include 4 index 0,1,2,3
console.log(name.slice(0,4))   // "moha" ==> from index (0),end index(4) not include 4 index 0,1,2,3,
// If Swap negative 
console.log(name.substr(-6,3))   // "d f" ==> from index (-6)==>start from last (-1),length(3)
console.log(name.substring(-6,3))   // "moha" ==> from index (0),end index(3) not include 3 index 0,1,2 =>start 0
console.log(name.slice(3,-6))   // "ame" ==> from index (3),end index(-6) not include -6 index 3,4,5 =>swap 
// 2- Array
/**
 * 1-convert string
 * .tostring()==>,
 * .join('s')==>s
 * 2-convert string to array
 * .split('s')=>[s]
// 3- add delete 
    .push(add end) .unshift(add start)
    .pop(delete end) .shift(delete end)
    .splice(pos,length deleted,add,add) if length 0 ==added only
    // 4- 
    .sort((first,second)=>{
        can convert })
    .filter( item => item % 2 == 0 ) ==>even return new array
    .reverse()==>change original
    // 5- high Order Function ==>
        foreach() dont return new array
    .map(return new array)
    .reduce((previous,current)=>{} , start )
    .


 */