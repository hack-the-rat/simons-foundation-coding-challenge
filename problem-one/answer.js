foo = 3; // place "let" or "var" to identify what variable "foo" is
bar = false; // second verse, same as the first
const everyday = new Date();
if (foo == 'three') {
    var obj = {
        hello: 123,
        world: 456
    };
    for (let i = 0, i < obj.length; ++i) { // the for-loop has a comma after "let i = 0" where the semicolon should be
        document.appendChild(document.createElement('div'));  //please further specify the divs in each "getElementById"
        document.getElementById('xyz').style.border = '1px solid #000';  // which border, the one on this line or the one three lines below?
        document.getElementById('xyza').style.color = 'white';
        document.getElementById('xyzab').style.marginTop = '160px';
        document.getElementById('xyzabc').style.border = '1px solid #123'; // which border, the one on this line or the one three lines above?

        while (child.nodeName() !== 'span' && (p = child.parentNode));
        foo = obj[multiply(i, i - 3)];
    }
}
const multiply = (x, y) => x * y;