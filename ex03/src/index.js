// Only change code below this line
function myEqualFunction(num) {
    if (num === 23) { 
        return "Equal";
    } 
    return "Not equal";
}
myEqualFunction(5 === 23); // Not equal
myEqualFunction(23 === 23); // Equal
myEqualFunction("23"=== 23); // Not equal
myEqualFunction('23' === 23); // Not equal
myEqualFunction("text" === 23); // Not equal
// Only change code above this line

console.log(myEqualFunction(5)); 
console.log(myEqualFunction(23)); 
console.log(myEqualFunction("23")); 
console.log(myEqualFunction('23')); 
console.log(myEqualFunction("text")); 
module.exports = myEqualFunction;