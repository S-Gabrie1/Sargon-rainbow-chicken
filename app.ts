

const Animals: string [] = ["apa", "orangutang", "gorilla", "get", "giraff"];

console.log(Animals);

type obj = {
    name: string;
    age: number;
    anställd: boolean;
}

const employee : obj = {
    name : "tony",
    age: 23,
    anställd: true
}

console.log(employee);

let  foo = function(x:string):string {
    return (`hello ${x}`);
}



for (let i = 0; i < Animals.length; i++) {
    console.log(foo(Animals[i]));
}