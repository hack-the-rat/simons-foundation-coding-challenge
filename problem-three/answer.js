function count() {
    let counter;
    for (counter = 0; counter < 3; counter++) {
        setTimeout(function () {
            console.log('counter value is ' + counter);
        }, 100);
    }
}
count();

/* 
    According to MDN, a closure is the combination of a function bundled together, or enclosed, with references (such as variables, constants, and other functions within the main function) to its surrounding state, known as the lexical environment.

    As for currying, when used in a closure, it can receive its arguments separately instead of all at once.  Consider currying like adding ingredients (arguments, or other spices) to a function one by one.  You can drop some arguments now and other arguments as needed.

    Here is a simple example of adding two numbers without currying:
        const add = (x, y) => x + y;
        add(1, 2);
    
    Now here's the same example with currying:
        const add = (x, y) => {
            function addY(y) {
                return x + y;
            }

            return addY;
        };
    Then refactor addY into an anonymous function:
        const add = (x, y) => {
            return (y) => {
                return x + y;
            }
        };
    Or simplify it with one-liner arrow functions:
        const add = (x) => (y) => x + y;

    As for the JavaScript code, it only delivers the last output "counter value is 3".  It doesn't show the rest of them as the loop continues.  Moreover, I would remove the "let counter;" on line two and reformat the for-loop so that it goes "for (let counter = 0; counter < 3; counter++) ..."  It is also missing an argument for currying of the closure code to operate properly.  I would reformat the code into running like arrow functions with specific arguments (like x or y) for it to run smoothly.

    * Results may vary.*
*/