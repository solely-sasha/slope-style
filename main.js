// challenge 1: 
// --------------------------------------------------------------------------------------------------------
//Use the rest operator to help return an array of animals, no matter how many animals are passed to it

 function collectAnimals(...animals) {
    return animals;
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]


// challenge 2: 
// ---------------------------------------------------------------------------------------------------------------
// write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax
// that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

// function combineFruit(fruit, sweets, vegetables){
//     return {fruit, sweets, vegetables}
// }

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"]))
//=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    //  }


const combineFruit = (fruit, sweets, vegetables ) => ({fruit, sweets, vegetables})

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))

// challenge 3: 
// ---------------------------------------------------------------------------------------------------

 // Use destructuring to use the property names as variables. Destructure the object in the parameter:

 function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
  vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
  };

  console.log(parseSentence(vacation))


  // challenge 4:
  // Use array destructuring to make this code ES6:
// ------------------------------------------------------------------------------------------------------------

function returnFirst(...items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}

console.log(returnFirst("thing", "another thing"))


// challenge 5:

// Write destructuring code to assign variables that will help us return the expected string. 
// Also, change the string to be using Template literals:
//----------------------------------------------------------------------------------------
const favoriteActivities = ["coding", " ", "puzzles", "drawing", "eating"];

function returnFavorites(arr){
let [secondFav, thirdFav, , , firstFav ] = arr;
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}.`
}

console.log(returnFavorites(favoriteActivities))

// Challenge 6:
// use the rest and spread operator to help take any number of arrays and return one array.
// You will need to change how the arrays are passed in. 
// You may write it assuming you would always recieve three arrasy if you would like to.
// -----------------------------------------------------------------------------------------

function combineAnimals(arr, arr2, arr3) {
return[...arr, ...arr2, ...arr3]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]



// challenge 7:
// make the following function more ES6y:
// ----------------------------------------------------------------------------

// function product(a, b, c, d, e) {
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }
  
// console.log(product(2, 1, 3, 7, 4))
const numbers = [1, 2, 3, 4, 5]
const product = numbers.reduce((acc, num) => acc * num);


console.log(product)


// challenge 8:
// make the following function more ES6y. Use at least both the rest and spread operators:

function unshift(array, arr2) {
 
    return [...arr2, ...array]
  }
  
  console.log(unshift(["two"], ["one"]))


  // challenge 9:

  // write some destructuring code to help this function out. Use the ES6 shorthand 
  // that helps make the syntax look less redundant to simplify it.
// --------------------------------------------------------------------------------
function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ")
  return {firstName: name[0], lastName: name[1]} 
  
    
    })

    
}


console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
    


  

 
