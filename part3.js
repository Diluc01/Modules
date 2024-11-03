export { object, incrementAge, makeCopy };

// part 3

//first problem
let object = {
  name: "berlin",
  age: 25,
  occupation: "student",
};

function incrementAge(obj) {
  const object2 = obj.age + 1;
  return object2;
}

const result6 = incrementAge(object);

console.log(result6);

//second problem

function makeCopy(obj) {
  const objCopy = obj;
  Number(objCopy.age) + 1;
  return objCopy;
}

const result7 = makeCopy(object);

console.log(result7);
