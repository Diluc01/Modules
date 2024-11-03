export { arrayOfObjects, filteredArray, mappedArray, reduceArray, average2 };

//Part 2
// First problem
let arrayOfObjects = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

arrayOfObjects.sort((a, b) => {
  return a.age - b.age;
});

console.log(arrayOfObjects);

// second problem
const filteredArray = arrayOfObjects.filter((user) => {
  if (Number(user.age) < 50) {
    return user;
  }
});

console.log(filteredArray);

// third problem
const mappedArray = arrayOfObjects.map((currentUser) => {
  delete Object.assign(currentUser, {
    ["job"]: currentUser["occupation"],
  })["occupation"];
  currentUser.age = Number(currentUser.age) + 1;
  currentUser.age = String(currentUser.age);
  return currentUser;
});

console.log(mappedArray);

//fourth problem

const reduceArray = arrayOfObjects.reduce((accu, currentValue) => {
  return accu + Number(currentValue.age);
}, 0);

console.log(reduceArray);

const average2 = reduceArray / arrayOfObjects.length;

console.log(average2);
