

var Image =prompt("Enter Image Name (Book ,Boy ,Girl ,Pen) ","Book");
var Color=prompt("Enter Color Name As (Red ,Green ,...) ","red");

// Return Day 1 From Nadia
document.write('<p style="color:'+Color+' ;   ">This Is '+Image+' </p>')
document.write('<div style="border: 2px solid '+Color+';">\
    <img  style="width:200px ;" src ="./Images/'+Image+'.png" />\
    </div> ')
