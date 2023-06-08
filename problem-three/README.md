# Problem 3: Closures
Closure, in computer programming, is an interesting concept about which many people are not quite clear. Could you please briefly describe, in plain English, what a closure is? Could you please show and explain to us briefly, with simple code examples (in JavaScript), how closure can be applied to the following case:
1.	Currying.

Can you tell us why the following Javascript code doesn’t work correctly?
How would you fix it?

```
function count() {
	let counter;
	for (counter = 0; counter < 3; counter++) {
    	setTimeout(function () {
        	console.log('counter value is ' + counter);
    	}, 100);
	}
}
count();
```

## Answer
According to MDN Web Docs, a closure is the combination of a function bundled together or enclosed with references (such as variables, constants, and sub-functions within the main function) to its surrounding state, known as the lexical environment.  As for currying, when used in a closure, it can receive its arguments separately instead of all at once.  To put it more simply, currying is like adding ingredients (arguments, or other spices) to a function one at a time as you go along.  In short, you can drop some arguments now and the rest as needed.  While answering this problem, I searched this [webpage](https://www.freecodecamp.org/news/playing-around-with-closures-currying-and-cool-abstractions/) for more information.

### Code Sample
Here is a simple example of adding two numbers without currying:

    ```
    const add = (x, y) => x + y;
    add(1, 2);
    ```
    
Now here's the same example with currying:

    ```
    const add = (x, y) => {
        function addY(y) {
            return x + y;
        }

        return addY;
    };
    ```

Then refactor addY into an anonymous function:

    ```
    const add = (x, y) => {
         return (y) => {
            return x + y;
        }
    };
    ```

Or simplify it with one-liner arrow functions:

    ```
    const add = (x) => (y) => x + y;
    ```

### Answer (continued)
As for the JavaScript code, it only delivers the last output "counter value is 3".  It doesn't show the rest of them as the loop continues.  Moreover, I would remove the "let counter;" on line two and reformat the for-loop so that it goes "for (let counter = 0; counter < 3; counter++) ..."  It is also missing an argument for currying of the closure code to operate properly.  I would reformat the code into running like arrow functions with specific arguments (like x or y) for it to run smoothly.