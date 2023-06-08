# Problem 1: JavaScript bug fixing
Below is a JavaScript snippet. We'd like for you to start off by writing down your comments on the code, pointing out any errors, noting opportunities for improvement, and raising any questions you have. What would you change and how would you change it? Does everything make sense? Why or why not? We do not expect you to be able to turn this into fully functional code.

```
foo = 3;
bar = false;
const everyday = new Date();
if (foo == 'three') {
    var obj = { 
        hello: 123, 
        world: 456 
    };
    for (let i = 0, i < obj.length; ++i) {
        document.appendChild(document.createElement('div')); 
        document.getElementById('xyz').style.border = '1px solid #000'; 
        document.getElementById('xyza').style.color = 'white'; 
        document.getElementById('xyzab').style.marginTop = '160px'; 
        document.getElementById('xyzabc').style.border = '1px solid #123'; 
        while (child.nodeName() !== 'span' && (p = child.parentNode));
        foo = obj[multiply(i, i - 3)];
    }
}
const multiply = (x, y) => x * y;

```

## Answer
I specified that the "foo" and "bar" are missing the keyword "let" before them for better specificity.  The for-loop afterward has a comma after the "let i = 0" statement where the semicolon should be, causing the code to break.  In the "for-loop," I suggested further specifying the div elements, specifically the IDs in each.  Finally, I asked which borders should go to which ID div element they requested.  Speaking of which, the IDs would be better served if they were more specific or standardized.  As the snippet stands, the IDs the code wants the stylesheet to get are vague and confusing.