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
