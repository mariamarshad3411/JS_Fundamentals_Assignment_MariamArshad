let studentName = "Amena Ali";  
let studentAge = 20;           
let isEnrolled = true;         

document.write("<h2>Student Information</h2>");
document.write("Name: " + studentName + "<br>");
document.write("Age: " + studentAge + "<br>");
document.write("Enrolled: " + isEnrolled + "<br><br>");


let studentAgeString = String(studentAge);

document.write("Before Conversion: " + typeof studentAge + "<br>");
document.write("After Conversion: " + typeof studentAgeString + "<br><br>");


let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");


num1 = Number(num1);
num2 = Number(num2);


document.write("<h2>Math Operations</h2>");
document.write("Addition: " + (num1 + num2) + "<br>");
document.write("Subtraction: " + (num1 - num2) + "<br>");
document.write("Multiplication: " + (num1 * num2) + "<br>");
document.write("Division: " + (num1 / num2) + "<br>");
document.write("Modulus: " + (num1 % num2) + "<br><br>");


let userAge = prompt("Enter your age:");


userAge = Number(userAge);


if (userAge >= 18) {
    document.write("<h2>Voting Eligibility</h2>");
    document.write("You are eligible to vote!<br><br>");
} else {
    document.write("<h2>Voting Eligibility</h2>");
    document.write("You are not eligible to vote yet.<br><br>");
}


document.write("<h2>For Loop: Numbers from 1 to 10</h2>");
for (let i = 1; i <= 10; i++) {
    document.write(i + " ");
}
document.write("<br><br>");


let userInput;
do {
    userInput = prompt("Enter a number greater than 10:");
    userInput = Number(userInput);
} while (userInput <= 10);

document.write("<h2>Valid Input Received</h2>");
document.write("You entered: " + userInput);

