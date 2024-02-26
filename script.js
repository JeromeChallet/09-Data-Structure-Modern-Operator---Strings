'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  //we can compute property names
  //[weekdays[6]]
  [`day${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // before ES6
  //openingHours: openingHours,
  //ES6 Enhanced Literals
  //takes the object and puts into another one
  //and create a property name with the exact same name
  openingHours,

  //returns the content of the arrays based on the passed indexes
  //this function "order" is another key of the obj restaurant
  //create a porperty "order" and set that to a funciton expression
  //Before ES6
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  //After ES6
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`our pastas are made of ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////Sets///////////////
//sets are collection of unique values meaing they no duplicates
//sets can hold mixed data types
//like arrays sets are also iterables
//unlike arrays the var in sets are unique and the order is irrelevant
//sets have no indexes though
const orderSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
console.log(orderSet); // pasta, pizza, risotto
console.log(new Set('jerome')); //j e r o m e
console.log(orderSet.size); //3
console.log(orderSet.has('pizza')); //true
console.log(orderSet.has('banana')); //false
orderSet.add('garlic bread');
orderSet.add('garlic bread');
orderSet.delete('risotto');
console.log(orderSet); // pasta, pizza, garlic bread
console.log(orderSet[0]); // error
//orderSet.clear();

for (const order of orderSet) console.log(order);

//in a codebase the main use of sets to remove duplicate values
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
//conversion from a set to an array
//create an array, then unpack the set into it with ...
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // waiter, chef, manager
//to know how many different positions there are
console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
); // 3
//how many letters there are in a string
console.log(new Set('jeromechallet').size); //13
/*
///////////////Looping Objects: Keys, Values, Entries///////////////
//Looping over objects that are not iterables in an indirect way
//looping over property names/keys
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we r open on ${properties.length} days: `;

//for (const day of Object.keys(openingHours)) {
for (const day of properties) {
  // console.log(day); //thu fri sat
  openStr += `${day}, `;
}
console.log(openStr);

//looping over Property Values
const values = Object.values(openingHours);
console.log(values);

//looping over entire object, entries (name + value together)
const entries = Object.entries(openingHours);
console.log(entries);

//returns each key and each value
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
/*
///////////////Optional Chaining///////////////
//if a certain property does not exist then udefined is returned imediatly
//only if the property before ?. exists then the following property will read
console.log(restaurant?.openingHours?.mon?.open); //undefned

// loop over the array to check is the restaurant is open or closed on each of the day
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  //to be able to use a variable name as a property name, we use []
  restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Check is a certain method exists before we call it
console.log(restaurant.order?.(0, 1) ?? 'method does not exist'); //exist
console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exist'); //does not exist

//Arrays
const users = [{ name: 'jerome', email: 'hello@jerome.com' }];

console.log(users[0]?.name ?? 'Users array empty');
*/
/*
///////////////Looping Arrays For Loop///////////////
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//retrieve the current element
//the item variable is always the current element in each iteration
for (const item of menu) console.log(item);

//retrieve the current index
//each of the item is an array made of the index and array element itself
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//array iterator
//array where each position contains a new array
console.log([...menu.entries()]);
*/
/*
///////////////Logical Assignment Operator///////////////
const rest1 = {
  name: 'capri',
  numGuests: 20,
};
const rest2 = {
  name: 'la piazza',
  owner: 'luigi',
};

//OR assignment operator
//define a default nb of guests for obj that do have that property
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);

//AND assignment operator
//if there is a name, we want to say anonymous
// rest1.owner = rest1.owner && 10;
// rest2.owner = rest2.owner && 10;

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

//Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
*/
/*
///////////////Nullish Coaliscing Operator///////////////
//will return the 1st nullish value
//if none are present it will then just return the last value
//nullish: null and undefined (not 0 or '')
restaurant.numGuests = 0;
const guest = restaurant.numGuests ?? 10;
console.log(guest); // 10

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0
*/
/*
///////////////Short Circuiting///////////////
// || and && can
// 1) use ANY data type
// 2) return ANY data type
// 3) short circuiting or short-circuit evaluation
//if the 1st value is a truthy value, it will immediatly return it
//but if none are truthy, it will return the last value
//really usefull for defining default values
console.log('----OR----');
console.log(3 || 'jerome'); // 3
console.log('' || 'jerome'); // jerome
console.log(true || 0); // 0
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'hello' || 23 || null); // hello

//will define a default value of 10
//the following method does not work with 0
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
// will again define a default value of 10 but with short-circuiting
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('----AND----');
//if the 1st value is a falsy value, it will immediatly return it
console.log(0 && 'jerome'); // 0
console.log(7 && 'jerome'); // jerome
console.log('hello' && 23 && null && 'jerome'); // null

//practical example
//avoid an if statement when possible
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
/*
///////////////Rest Pattern & Parameters///////////////
// 1) destructuring
//looks like the ... but does the opposite
//it collects multiple elements and condense them into an array
//the spread operator will unpack an array while the rest pattern will pack them
//it's a spread because on the right side of =
const arr = [1, 2, ...[3, 4]];
//rest syntax cause ... on the left side of =
//it's called rest cause it will take the rest of the elements and create a new array called others here
//the rest pattern collect the rest of the elements that are unused in the destructuring assignment
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//the rest element must be the last and there can only be one
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); //only containing fri and thu

// 2) functions
//in this case the rest pattern is called the rest parameter
//the rest syntax is taking multiple nb and packing them into 1 array
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum); //returns the sum of those numbers no matter how many are passed
};

add(2, 3);
add(5, 3, 6, 4, 2);
add(5, 3, 8, 4, 1, 8, 6);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach'); //'onions', 'olives', 'spinach'
*/

/*
///////////////Spread Operator///////////////
//expand an array into all its elements
//unpacking all the array elements at once
//the difference with destructuring is that ... takes all the elements out of the array and doesn't create new variables
//meaning we can only use the ... in places where we would normally write values separated by commas
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr); //(5) [1, 2, 7, 8, 9]
//the ... is usefull to retrive all the elements individually of an array
console.log(...newArr); // 1 2 7 8 9

//adds more elements to the original array mainMenu
const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu);

//use case 1 : create shallow copies of arrays
const mainMenuCopy = [...restaurant.mainMenu];
//use case 2 : merge 2 arrays together
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//works on all iterables (arrays, strings, maps, sets but !objects)
const str = 'jerome';
const letters = [...str, '', 'C.'];
console.log(letters);
console.log(...str); // j e r o m e
//wont work cause not a place expecting values separated by a comma
//values seperated by a comma are only expected when we pass arguments into a function or when we build a new array
//console.log(`${...str} Challet`);
//that would work though
const jName = ['jerome', 'patrice'];
const fullName = `${jName.join(' ')} Challet`;
console.log(fullName);

//function that accepts multiple arg and use ... to pass them
const ingredients = [
  prompt('Ingredient 1?'),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);

//will write the 3 elements of the array separated by commas
restaurant.orderPasta(...ingredients);

// objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'mario' };
console.log(newRestaurant);

//copy object
//copying an obj this way means the properties will be copied but not the values
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano
*/

/*
///////////////Destructiring Objects///////////////
  //when a function has a lot of parameters,
  //instead of remembering and writting down all those parameters,
  //we declare an object inside that function and then destructure that object where needed
  //we are nesting all the parameters into one egg that will then be delivered with all the parameters inside
  //in this function, only one object was passed, not 4 arguments
  // and as soon as we receive this obj, we imediatly do destructuring
//we are calling the func orderDelivery and passing it an obj of options
//the following is a single obj
restaurant.orderDelivery({
  time: '22:30',
  address: 'tokyo',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'paris',
  starterIndex: 1,
});

//unlike arrays, we dont have to skip with empty spaces or follow the order of the propeerties
const { name, openingHours, categories } = restaurant;
//now hte props of the obj are variables
console.log(name, openingHours, categories);

//make the var name be diiferent fromm the property name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating a variable
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//when using {}, JS expect a codeblock
//but we cannot use one here so put it all in ()
({ a, b } = obj);
console.log(a, b); // 23 & 7

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(fri);
console.log(open, close); // 11 & 23
console.log(o, c); // 11 & 23

//
*/
/*
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
*/
