"use strict";
const Animals = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(Animals);
const employee = {
    name: "tony",
    age: 23,
    anställd: true
};
console.log(employee);
let foo = function (x) {
    return (`hello ${x}`);
};
console.log(foo("rick"));
for (let i = 0; i < Animals.length; i++) {
    console.log(foo(Animals[i]));
}
