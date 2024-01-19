/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Amon Alves Dos Reis";
let currentYear = new Date().getFullYear();
const profilePicture = "images/me.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture)
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */

// 5.1
let favoriteFoods = ["Sushi", "Pizza", "Burguer", "Ice cream", "Açai"];

// 5.2
foodElement.textContent = favoriteFoods;

// 5.3 Declare and instantiate a variable to hold another single favorite food item.
let anotherFavFood = ["Guarana"];
 
// 5.4 Add the value stored in this new variable to your favorite food array.
favoriteFoods.push(anotherFavFood);

// 5.5 Append
foodElement.innerHTML += `<br>${favoriteFoods}`; 

// 5.6 Remove first element
favoriteFoods.shift();

// 5.7
foodElement.innerHTML += `<br>${favoriteFoods}`;

// 5.8 Remove last element
favoriteFoods.pop();

// 5.9
foodElement.innerHTML += `<br>${favoriteFoods}`;
