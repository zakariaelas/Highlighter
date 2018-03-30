var sel = window.getSelection();
var range = sel.getRangeAt(0);
document.designMode ="on";
sel.removeAllRanges();
sel.addRange(range);
document.execCommand("HiliteColor",false,color);// try back color
document.designMode="off";
