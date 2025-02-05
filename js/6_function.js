// 1. Function Definition and Function Call
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Function Call

// 2. Function Expression
const add = function (a, b) {
    return a + b;
};
console.log("Addition:", add(5, 10));

// 3. Function with Parameters (Default, Rest, Spread)
function multiply(a = 1, b = 1) {
    return a * b;
}
console.log("Multiplication:", multiply(4, 3)); // 4 * 3
console.log("Multiplication with default value:", multiply(4)); // 4 * 1

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log("Sum using Rest Parameters:", sum(1, 2, 3, 4, 5));

const nums = [10, 20, 30];
console.log("Max using Spread:", Math.max(...nums));

// 4. Anonymous Function (Assigned to a Variable)
const greetAnonymous = function (name) {
    return `Hello, ${name}!`;
};
console.log(greetAnonymous("Bob"));

// 5. Arrow Function (Shorter Syntax)
const square = (num) => num * num;
console.log("Square:", square(6));

// Arrow function with multiple parameters and implicit return
const divide = (a, b) => a / b;
console.log("Division:", divide(20, 4));

// 6. Nested Functions
function outerFunction(x) {
    function innerFunction(y) {
        return x + y;
    }
    return innerFunction(10);
}
console.log("Nested Function Output:", outerFunction(5));

// 7. Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("This function runs immediately!");
})();

// IIFE with parameters
(function (name) {
    console.log(`Welcome, ${name}!`);
})("Charlie");

// 8. Async/Await Function
async function fetchData() {
    console.log("Fetching data...");
    return new Promise((resolve) => setTimeout(() => resolve("Data received"), 2000));
}

async function main() {
    console.log("Start");
    let data = await fetchData();
    console.log(data);
    console.log("End");
}

main();

// 9. Callback Function
function processUserInput(callback) {
    let name = "David";
    callback(name);
}

processUserInput(function (name) {
    console.log("Callback Function Output: Hello, " + name);
});

// 10. Higher-Order Function (Function that takes another function as an argument)
function operate(a, b, operation) {
    return operation(a, b);
}

console.log("Using Higher-Order Function:", operate(6, 3, add)); // 6 + 3 using 'add' function

// 11. Generator Function (Yielding values)
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = numberGenerator();
console.log("Generator Output:", generator.next().value);
console.log("Generator Output:", generator.next().value);
console.log("Generator Output:", generator.next().value);

