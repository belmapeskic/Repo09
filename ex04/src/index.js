// Only change code below this line
function compareDifferentValues(m, n) {
    if (m === n) { 
        return "Equal";
    }
    return "Not equal";
}
compareDifferentValues(8, "8"); // false
compareDifferentValues("8", 8); // false
compareDifferentValues('8', 8); // false
compareDifferentValues("8", "8"); // true
compareDifferentValues(8, 8); // true
// Only change code above this line

console.log(compareDifferentValues(8, "8"));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues('8', 8));
console.log(compareDifferentValues("8", "8"));
console.log(compareDifferentValues(8, 8));

module.exports = compareDifferentValues;