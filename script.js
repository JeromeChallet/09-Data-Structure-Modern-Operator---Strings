'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //returns the content of the arrays based on the passed indexes
  //this function "order" is another key of the obj restaurant
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

///////////////Destructiring Arrays///////////////
//unpacking values from an array or obj into seperate variables

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//js knows automatically that is destructuring
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//this time we destructure the array of an obj
//second here is the third element cause there is a hole in between
let [main, , second] = restaurant.categories;
console.log(main, second);

//switch the variables without destructuring
// const temp = main;
// main = second;
// second = temp;
// console.log(main, second);

//switch the variables with destructuring
//this time we dont need temp variable
[main, second] = [second, main];
console.log(main, second);

//destructuring assignment
//receive 2 return vaues from a function
const [starter, mainCourse] = restaurant.order(2, 0); // garlic bread & pizza
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // 2 & [5,6]

//retrieve all the values of a nested array
//destructuring inside destructuring
const [s, , [t, d]] = nested;
console.log(s, t, d); // 2 5 6

//set default values for the values we are extracting
//usefull when we don't know the length of the array
//default values
//without the default values, r would be seen as undefined in teh console log
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
