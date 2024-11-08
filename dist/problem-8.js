"use strict";
function validateKeys(obj, keys) {
    return keys.every((key) => key in obj);
}
// Sample Input:
const personTest = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(personTest, ["name", "age"]));
