const body = document.querySelector("body");
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
/* console.log the hobbies of the first person using Object.entries (tip: this is unnecessary code, but do it just to see the difference with what needs to be done later). 
Expected output is to be an array with 4 elements */

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
console.log(B_person_has_A_person_hobbies(lastPerson, firstPerson));
function B_person_has_A_person_hobbies(Aperson, Bperson) {
  return Aperson.hobbies.filter((v) => Bperson.hobbies.includes(v));
}
//! 1.6.

/* Use .map to display all the persons with their information on their page with the DOM. It should also show what hobbies they have in common. 
Choose whether to use createElement or innerHTML. (Great if you do it both ways, comment out the unused code. Remember to use defer if the script tag is in the head!) */

function addliel(element) {
  let lis = document.createElement("li");
  lis.textContent = element;
  return lis;
}

function displayPersonsInfo(Persons) {
  let ul = document.createElement("ul");
  Persons.forEach((person) => {
    ul = document.createElement("ul");
    Object.keys(person).forEach((nokkel) => {
      switch (nokkel) {
        case "hobbies":
          let ulhobby = document.createElement("ul");
          let equalhobbies = CheckEqualHobbiesTHEperson(person);
          Object.keys(equalhobbies).forEach((felleshobbyperson) => {
            ulhobby.appendChild(
              addliel(
                `${felleshobbyperson} er: ${equalhobbies[
                  felleshobbyperson
                ].join(", ")}`
              )
            );
          });
          let lihobby = addliel(`Felles interesse ${person.name} har med:`);
          lihobby.appendChild(ulhobby);
          ul.appendChild(lihobby);
          break;
        default:
          ul.appendChild(addliel(`${nokkel} = ${person[nokkel]}`));
          break;
      }
    });
    body.appendChild(ul);
  });
}
displayPersonsInfo(peopleArrayWithObjects);

//! 1.7

/* Use .filter to find all persons who have the same hobby as firstPerson. Display this with the DOM */
function CheckEqualHobbiesTHEperson(Theperson) {
  let returning = {};
  peopleArrayWithObjects.forEach((person) => {
    if (Theperson.id === person.id) {
      return;
    }
    returning[person.name] = B_person_has_A_person_hobbies(Theperson, person);
  });
  return returning;
}
console.log(CheckEqualHobbiesTHEperson(firstPerson));
body.innerHTML += "Oppgave 1.7 er også gjort i oppgave 1.6";
//B_person_has_A_person_hobbies(firstPerson)

//! 2

/* Generate a random array with 10 random numbers between 1 and 100. console.log the array. */
function getrandom(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
function createrandomarray(indexes, min = 1, max = 100) {
  return Array.from(new Array(indexes), () => getrandom(min, max));
}
function createrandomarrayrecrusive(indexes, depth = 2, min = 1, max = 100) {
  let svar = [];
  for (let i = 0; i < indexes; i++) {
    if (depth === 1) {
      return createrandomarray(indexes);
    }
    svar.push(createrandomarrayrecrusive(indexes, depth - 1));
  }
  return svar;
}

console.log(getrandom(1, 100));
let result = createrandomarray(10);

console.log(result);

//! 2.1

/* Separate odd and even numbers in the array you created in task 2 into two new arrays. console.log the new arrays. */

let odd = result.filter((v) => (v = v % 2 === 1));
console.log(odd);
let even = result.filter((v) => (v = v % 2 === 0));
console.log(even);

//! 2.2

/* Write a function that finds the largest number in the different arrays. Use a parameter so that the same function can be used on both arrays. Tips: Math.max() */

function largestElements(arrays) {
  let Maxs = [];
  arrays.forEach((array) => {
    let Max = -Infinity;
    array.forEach((element) => {
      Max = Math.max(Max, element);
    });
    Maxs.push(Max);
  });
  return Maxs;
}
let testsvar = createrandomarrayrecrusive(10);
console.log(testsvar);
console.log(largestElements(testsvar));
console.log(createrandomarrayrecrusive(10));
//! 2.3.

/* Write a function that adds up all the numbers in the different arrays. So the sum of odd numbers in one result and the sum of even numbers in another result. 
Use a parameter in the function so that the same function can be used on both arrays. console.log the results. */
function sumFilterDelimiter(arrays, Delimter, Rest) {
  let sums = [];
  let ToGetSumfOf;
  arrays.forEach((array) => {
    let sum = 0;
    ToGetSumfOf = array.filter((v) => (v = v % Delimter === Rest));
    ToGetSumfOf.forEach((element) => {
      sum += element;
    });
    sums.push(sum);
  });
  return sums;
}

console.log(sumFilterDelimiter(testsvar, 2, 1)); //consoles all odd number in 10 array testsvar is a "random" generated (10) [Array(10),....]

console.log(sumFilterDelimiter(testsvar, 2, 0)); //consoles all even number in 10 array testsvar is a "random" generated (10) [Array(10),....]

//! 2.4

/* Create a function that adds up the numbers in different arrays. Use 2 parameters to be able to use 2 different arrays (the odds and evens arrays you created earlier). 
Write an if-else statement that console logs which of the two arrays has the largest sum. Remember an else statement that says if both are equal (very unlikely) */

//! 2.5:

/* Display the results from all steps in task 2 (2, 2.1, 2.2, 2.3, 2.4) with DOM in a good way */
