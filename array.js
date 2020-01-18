// an array is a collection of things
var exampleArray = [0,1,2,3,4,5];
// here is an array of 6 numbers, starting from zero and ending on 5
// arrays are 0 indexed, which means the first position is 0, then 1, then 2 and so on...

var exampleArray2 = [2,3,4,5]
// here, position 0 is value 2, position 1 is value 3

// arrays can also have a length of 0 and be empty
var anEmptyArray = [];

// we can have an array of strings
var stringArray = ['a','b','hello','goodbye','I love you','programming is fun!'];

// we can also have a mix
var mix = [0,'a',10,'crazy things',-19283]

// arrays are fundamental to programming and are a way to group things
// for example, we can have an array of grocery items
var groceryItems = ['carrots','milk','steak']

// we can even have an array of arrays
var arrayOfArrays = [[1,2,3],['a','b','c']]

// to access items in the array we can use an index
var a = exampleArray[0] // this will return value 0;
var a = stringArray[2] // this will return value 'hello';
var c = arrayOfArrays[0] // this will return value [1,2,3]
var d = arrayOfArrays[0][1] // this will return value 2
var e = arrayOfArrays[1][0] // this will return value 'a'

// arrays have special methods on them that help us work with them
// foreach, map, filter, reduce are common helper methods and we will get into them later

// arrays also have a length property that will tell us the size of the array
// exampleArray has a length of 6

// this makes it easy to get the last value of an array
var lastValue = exampleArray[exampleArray.length -1]

// we can easily add and remove from an array using push and pop
exampleArray.push(6) // the value 6 will be added to the array
exampleArray.pop() // will remove the last item in the array, which for us if the value 6