// Find last element

let arr1 = [3,7,34,90,12];
console.log({arr1});
console.log(arr1[arr1.length-1])
let arr2 = [true, "green", "where",12,56];
console.log(arr2[arr2.length-1])

// Joining to form a string


let myPets = ["Cow", "Bird", "Snake", "Dog"];
let animals = myPets.join();
console.log(animals);

// Sorting


var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr = arr3.sort();
console.log(arr);

// Removing duplicates

let things = ["boy", "man", "girl",  "school", "girl", "woman"];
let nonduplicates = [...new Set(things)];
console.log(nonduplicates);

// Find word in an array


let arr5 = ["the", "way", "x", 4];
let arr6 = arr5.find(word =>word === "food");
console.log(arr6);

// Sorting a string


let word = "renniw";
let wordArr = word.split("");
let sortedWord = wordArr.sort();
let stringWord = sortedWord.join();
console.log(stringWord);

// Inserting in array


let fruits = ['apple','banana','orange','grape','strawberry','kiwi','mango','pineapple','watermelon','papaya'];
let center = Math.floor(fruits.length/2);
fruits.splice(center,0,'Tomato');
console.log(fruits);