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


// function getSubscriptionPrice(type) {
//     switch (type) {
//       case 'starter':
//        return 0;
//        break;
//       case 'professional':
//        return 20;
//        break;
//       case 'organization':
//        return 50;
//        break;
//       default:
//       return 'Invalid subscription type!';
//   }
// }

// console.log(getSubscriptionPrice('return'));

// function normalizeInput(input, to) {

//   if (to === "upper") {
//     return input.toUpperCase()
//   } else {
//     return input.toLowerCase()
//   }
// }

// console.log(normalizeInput("This ISN'T SpaM", "upper"));

// function checkForName(fullName, firstName) {
  
//   if (fullName.toUpperCase(fullName.includes(firstName))) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkForName("Caty Stars", "Andromeda"));

// function checkForName(fullName, firstName) {
//   fullName = fullName.toLowerCase();
//   firstName = firstName.toLowerCase();
//   return fullName.includes(firstName);
// }

// console.log(checkForName("Caty Stars", "Andromeda"));


// function getFileName(file) {
//   // return file = file.slice(0, file.indexOf("."));
//     if (file.indexOf(".") >= 0) {
//       return file.slice(0, file.indexOf("."))
//     } else {
//         return file;
//     }
// }

// console.log(getFileName("styles.css"));

// function calculateTotal(number) {
//   let total = 0;
//   for (let index = 1; index <= number; index = index + 1)
//     total = total + index;
//     return total;
// }

// console.log(calculateTotal(10));

// function calculateTotal(number) {
//   let total = 0;
//   for (let index = 1; index <= number; index++)
//     total += index;
//     return total;
// }

// console.log(calculateTotal(5));

// function calculateTotal(number) {
//   // let total = 0;
//   // for (let index = 1; index <= number; index++) 
//   //   total += index;
//   //   return total;
//   let total = 0;
//   let index = 1; 
//   while (index <= number) {
//     total += index;
//     index++;
//   }
//   return total;
// }

// console.log(calculateTotal(5));