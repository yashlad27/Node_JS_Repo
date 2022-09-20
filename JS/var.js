var x = 10; // JS GlobalVariable
var _value = "Helloooo";

var y = 20;
var z = x + y;

function VariousVariables() {
    var x = 20; // JS local Variable
    console.log(x);
}

var value = 40;

function ValueGotem() {
    //alert(value);
    console.log(value);
}

function ValueNoWay() {
    //alert(value);
    console.log(value);
}

console.log(x);
console.log(y);
console.log(z);

console.log(_value);

VariousVariables(); // calling JS function
ValueGotem();
ValueNoWay();