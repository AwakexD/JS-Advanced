let names = ['Pesho', 'Gosho', 'Maria'];

names[-1] = "taino";
//Output Array
names.forEach(element => console.log(element));

names[names.length] = "Lilly"

console.log(...names);

console.log(names.join('\n'));

console.log(names);

// Array Destructuring Assigment Syntaxis

let [name1, name2, name3, ...others] = names;

console.log(others);

// Mutator Methods

let nums = [10, 20, 30, 40, 50, 60, 70];

console.log(nums.length);
console.log(nums.pop());

nums.push(100);

//queue mthods 
console.log(nums.shift());
let newLength = nums.unshift(10)

console.log(nums);