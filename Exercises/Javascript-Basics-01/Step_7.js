var x=parseFloat(prompt("enter your shoe size"));
var y=parseFloat(prompt("enter your birth year"));
var z;
function dd(x,y){
    z=x*2;
    z=z+5;
    z=z*50;
    z=z-y;
    z=z+1766;
    return z;
}
alert(dd(x,y));