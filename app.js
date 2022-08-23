/*


// Q1:
// Write a function named createList that takes in an array of the current store inventory.

// The inventory is formatted like this:
// [
//   { name: 'apples', available: true },
//   { name: 'pears', available: true },
//   { name: 'oranges', available: false },
//   { name: 'bananas', available: true },
//   { name: 'blueberries', available: false }
// ]

// This function should use forEach to populate your grocery list based on the store's inventory.
//  If the item is available, add it to your list. Return the final list.

*/

function createList(arr){
    let newL =[]
    arr.forEach(element => {
    if(element.available==true)
    newL.push(element)});

    return newL
}

let inv =  [
      { name: 'apples', available: true },
      { name: 'pears', available: true },
      { name: 'oranges', available: false },
      { name: 'bananas', available: true },
      { name: 'blueberries', available: false }
    ]

    console.log(createList(inv))

    console.log("*********************")

    /*
    // Q2:
// Write a function that, given an array of numbers as input,
 uses map to return a new array where each element is either the
  string "even" or the string "odd", based on each value.

// If any element in the array is not a number, 
the resulting array should have the string "N/A" in its place.

// For example: evenOdd([1,2,3]) returns ['odd','even','odd'].

    
    */

function useMap(array){

    return array.map(el => {if(isNaN(el))return "N/A" 
    else if(el%2==0) 
    return "even" 
    else return "odd"})    
}

let myMap=[1,"r",2,3,"s"]
console.log(useMap(myMap))

console.log("*********************")

// Q3:
// Write a function named notInFirstArray that,
// given two arrays as input,
//  uses filter to return an array of all the
// elements in the second array that are not included in the first array.

// For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].

function notInFirstArray(arr1,arr2){
return arr2.filter((element)=>!arr1.includes(element))
}

let arr1 = [1,2,3]
let arr2 = [1,4,3,2,6]

console.log(notInFirstArray(arr1,arr2))

console.log("*********************")


// Q4:
// Write a function named reversedString that takes 
//in a string and returns a string with the letters in reverse order.

// Note: You must use reduce for this challenge. 
//You may not use the built-in .reverse() string method.

function reversedString(str){
    let splitStr = str.split('')
    return splitStr.reduce((reversed, character) => character + reversed, '')
}

let string = "Nourman"
console.log(reversedString(string))

console.log("*********************")


// Q5:
// Write a function named isNum that takes in a 
//string or number of any length. 
// This function should use a regular expression 
//pattern to return true if the input contains a number,
//  and false if the input does not contain a number.

// For example:
// 12345 returns true
// '12345' returns true
// 'h3llo world' returns true
// 'hello world' returns false


function isNum(para){
    let reg = /[0-9]/ig
return reg.test(para)
}

let variable = "St1ring"
console.log(isNum(variable))


console.log("*********************")
// Q6:
// You have created a game application and begin 
//by asking users an easy question: In which month is Halloween?

// Write a function named matchMonth which 
//uses a regular expression pattern to match any of these 
// inputs: October|Oct|october|oct

// If the user enters any of these four inputs, 
//return true. For any other input, return false.


let month =prompt("In which month is Halloween?")
console.log(month + " = " + matchMonth(month))

function matchMonth(month){

    let reg =/(^\s*oct\s*$|^\s*october\s?$)/ig
return reg.test(month)
}