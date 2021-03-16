"use strict";


// 1. printIndices
// Print each item in the array, followed by its index
function printIndices(items) {
  for(const i in items) {
    console.log(i);
  }
}


// 2. everyOtherItem
//print every other item
function everyOtherItem(items) {
  let our_list = []
  for(let i in items) {
    if (i % 2 === 0); {
      our_list.push(items[i])
  console.log(our_list)
    }
  }
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
}
