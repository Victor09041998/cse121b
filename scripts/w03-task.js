/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    let sum = number1 + number2;
    return sum;
}
// Function declaration for addNumbers
function addNumbers() {
    // Gets the values of the HTML form controls and convert them to numbers
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    
    // Called the add function with the obtained values and assign the result to the sum
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }
  // Add a "click" event listener to the HTML button with an ID of addNumbers
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  // Function expression for subtractNumbers
  const subtractNumbers = function() {
    // Gets the values of the HTML form controls and convert them to numbers
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    
    // Called the subtract function with the obtained values and assign the result to the difference
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  };
  
  // Added a "click" event listener to the HTML button with an ID of subtractNumbers
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

// Arrow function for multiplyNumbers
const multiplyNumbers = () => {
  // Gest the values of the HTML form controls and convert them to numbers
  let factor1 = Number(document.querySelector('#factor1').value);
  let factor2 = Number(document.querySelector('#factor2').value);
  
  // Called the multiply function with the obtained values and assign the result to the product
  document.querySelector('#product').value = multiply(factor1, factor2);
};

// Added a "click" event listener to the HTML button with an ID of multiplyNumbers
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}

// Function expression for divideNumbers
const divideNumbers = function() {
    // Get the values of the HTML form controls and convert them to numbers
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    
    // Call the divide function with the obtained values and assign the result to the quotient
    document.querySelector('#quotient').value = divide(dividend, divisor);
};

// Arrow function for divideNumbers
const divideNumbersArrow = () => {
    // Gets the values of the HTML form controls and convert them to numbers
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    
    // Called the divide function with the obtained values and assign the result to the quotient
    document.querySelector('#quotient').value = divide(dividend, divisor);
};

// Added a "click" event listener to the HTML button with an ID of divideNumbers
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function() {
    // Get the numeric value entered by the user in the subtotal field
    let subtotalInput = document.querySelector('#subtotal').value;
    
    // Check if the subtotalInput is not empty
    if (subtotalInput !== '') {
        // Convert the input value to a floating-point number
        let subtotal = parseFloat(subtotalInput);
        
        // Checking if the membership checkbox is checked
        let membershipChecked = document.querySelector('#member').checked;
        
        // Applying a 20% discount if the membership checkbox is checked
        if (membershipChecked) {
            subtotal *= 0.8; // 20% discount applied
        }
        
        // Output the total to the total span in the format with two decimals using a template string
        document.querySelector('#total').textContent = `\$${subtotal.toFixed(2)}`;
    } else {
        // If subtotal is empty, display an error message or handle the case appropriately
        alert('Please enter a subtotal value.');
    }
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
// Declare and instantiate an array variable to hold the numbers 1 through 13
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Assigning the value of the array variable to the HTML element with an ID of array
document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */
// Using the filter() array method to find all of the odd numbers of the array variable
// and assign the result to the HTML element with an ID of odds
document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
// Using the filter() array method to find all of the even numbers of the array variable
// and assign the result to the HTML element with an ID of evens
document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
// Using the reduce() array method to sum the array variable elements
// and assign the result to the HTML element with an ID of sumOfArray
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number, 0);

/* Output Multiplied by 2 Array */
// Using the map() array method to multiply each element in the array variable by 2
// and assign the result to the HTML element with an ID of multiplied
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
// Using the map() and reduce() array methods to sum the array elements after multiplying each element by two
// Assign the result to the HTML element with an ID of sumOfMultiplied
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
