// var text = window.getSelection().getRangeAt(0);
// var newElement = document.createElement("span");
// newElement.className = "extHighlighter";
// text.surroundContents(newElement);
// newElement.style.background = "yellow";

var sel = window.getSelection();
var range = sel.getRangeAt(0);
document.designMode ="on";
sel.removeAllRanges();
sel.addRange(range);
document.execCommand("HiliteColor",false,color);// try back color
document.designMode="off";