const peopleArrayWithObjects = [
  {
    id: 1,
    name: "Alice",
    age: 28,
    email: "alice@example.com",
    country: "USA",
    hobbies: ["Reading", "Hiking", "Photography", "Swimming"],
  },
  {
    id: 2,
    name: "Bob",
    age: 35,
    email: "bob@example.com",
    country: "Canada",
    hobbies: ["Cooking", "Playing guitar", "Gardening", "Traveling"],
  },
  {
    id: 3,
    name: "Charlie",
    age: 22,
    email: "charlie@example.com",
    country: "UK",
    hobbies: ["Painting", "Skiing", "Music", "Cycling"],
  },
  {
    id: 4,
    name: "David",
    age: 40,
    email: "david@example.com",
    country: "Australia",
    hobbies: ["Swimming", "Fishing", "Reading"],
  },
  {
    id: 5,
    name: "Eva",
    age: 32,
    email: "eva@example.com",
    country: "Germany",
    hobbies: ["Skiing", "Playing Guitar", "Photography", "Cooking"],
  },
];

//! 1.

/* console.log the array */
console.log(peopleArrayWithObjects);

//! 1.1:

/* create variables for firstPerson (first person object in the array) and lastPerson (last person object in the array) for peopleArrayWithObjects: */
const firstPerson = peopleArrayWithObjects[0];
console.log(firstPerson);
const lastPerson = peopleArrayWithObjects[peopleArrayWithObjects.length - 1];
console.log(lastPerson);

//! 1.2

console.log(Object.entries(firstPerson));
console.log(Object.entries(lastPerson));
/* console.log all the objects of the first and last persons using Object.entries. Expected output: 
(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
*/

//! 1.3
/* console.log the hobbies of the first person using Object.entries (tip: this is unnecessary code, but do it just to see the difference with what needs to be done later). Expected output is to be an array with 4 elements */

console.log(Object.entries(firstPerson.hobbies));
console.log(Object.entries(lastPerson.hobbies));

console.log(Object.entries(firstPerson.hobbies));
console.log(Object.entries(lastPerson.hobbies));

//! 1.4

/* Use .map instead of Object.entries to achieve the same result in the console as in 1.2: */

console.log(firstPerson.hobbies.map((hobby, index) => [index, hobby]));
console.log(lastPerson.hobbies.map((hobby, index) => [index, hobby]));

//! 1.5.

/* Use .filter and .includes to find out which hobbies are common between firstPerson and lastPerson. Expected output is an array with common hobbies */
console.log(lastPerson.hobbies.filter((v) => firstPerson.hobbies.includes(v)));

//console.log(
//firstPerson["hobbies"].filter(([value,2]) => typeof value === "Photography")
//);

//! 1.6.

/* Use .map to display all the persons with their information on their page with the DOM. It should also show what hobbies they have in common. Choose whether to use createElement or innerHTML. (Great if you do it both ways, comment out the unused code. Remember to use defer if the script tag is in the head!) */

//! 1.7

/* Use .filter to find all persons who have the same hobby as firstPerson. Display this with the DOM */

//! 2

/* Generate a random array with 10 random numbers between 1 and 100. console.log the array. */

//! 2.1

/* Separate odd and even numbers in the array you created in task 2 into two new arrays. console.log the new arrays. */

//! 2.2

/* Write a function that finds the largest number in the different arrays. Use a parameter so that the same function can be used on both arrays. Tips: Math.max() */

//! 2.3.

/* Write a function that adds up all the numbers in the different arrays. So the sum of odd numbers in one result and the sum of even numbers in another result. Use a parameter in the function so that the same function can be used on both arrays. console.log the results. */

//! 2.4

/* Create a function that adds up the numbers in different arrays. Use 2 parameters to be able to use 2 different arrays (the odds and evens arrays you created earlier). Write an if-else statement that console logs which of the two arrays has the largest sum. Remember an else statement that says if both are equal (very unlikely) */

//! 2.5:

/* Display the results from all steps in task 2 (2, 2.1, 2.2, 2.3, 2.4) with DOM in a good way */
