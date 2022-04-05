// Only change code below this line
function myEqualFunction(num) {
    if (num) { 
        return "Equal";
    }
    return "Not equal";
}
myEqualFunction(5 == 23); // false
myEqualFunction(23 == 23); // true
myEqualFunction("23" === 23); // false
myEqualFunction('23' === 23); // false
myEqualFunction("text" == 23); // false
// Only change code above this line

console.log(myEqualFunction(false));
console.log(myEqualFunction(true));
console.log(myEqualFunction(false));
console.log(myEqualFunction(false));
console.log(myEqualFunction(false));

module.exports = myEqualFunction;