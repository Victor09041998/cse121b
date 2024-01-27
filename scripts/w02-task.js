/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Uduma Godspower';
const currentYear = '2024';
const profilePicture = 'images/profile.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food'); 
const yearElement = document.querySelector('#year');
var imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', fullName);

/* Step 5 - Array */
const favFoods = ['Rice', 'Meatpie', 'Sharwama', 'Noodles', 'Burger', 'Friut', 'Salad'];
let newFood = ['Chicken', 'Plantain'];// Add new foods to the favFoods array
favFoods.push(...newFood);
foodElement.innerHTML += favFoods.join(', ');// Display the updated favFoods array in the 'food' element
foodElement.innerHTML += `<br>${newFood.join('<br>')}`;// Append the new array values with line breaks to the displayed content
