// let input = '';
// let operator = '';
// let ans = '';

// function join(num) {
//     input += num;
//     display();
// }

// function operate(op) {
//     if (input === '') return;  // Prevent setting an operator without an operand

//     if (operator !== '') {
//         equalto();  // Perform the calculation if an operator is already set
//     }

//     operator = op;
//     ans = input;  // Store the current input as the first operand
//     input = '';   // Clear the input to start taking the next operand
//     display();
// }

// function equalto() {
//     if (operator === '' || input === '') return;  //checking both operand and operator is entered

//     let num1 = parseFloat(ans);
//     let num2 = parseFloat(input);
//     let result = 0;

//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                 result = 'Error';  // Handle division by zero
//             }
//             break;
//         default:
//             return;
//     }

//     input = result.toString();  // Store the result as the current input
//     operator = '';  // Reset the operator for the next calculation
//     ans = '';  // Clear the stored operand
//     display();
// }

// function c() {
//     input = '';
//     operator = '';
//     ans = '';
//     display();
// }

// function erase() {
//     input = input.slice(0, -1);         //removing the last character from input string
//     display();
// }

// function display() {
//     document.querySelector(".display-area").value = input || ans || '0';
// }


