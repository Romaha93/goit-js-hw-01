'use strict';

function getElementWidth(content, padding, border) {
    let resaltContent = Number.parseFloat(content);
    let resaltPadding = Number.parseFloat(padding);
    let resaltBorder = Number.parseFloat(border);
    
    const totalSize = resaltContent + resaltPadding * 2 + resaltBorder * 2;
    return totalSize;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
