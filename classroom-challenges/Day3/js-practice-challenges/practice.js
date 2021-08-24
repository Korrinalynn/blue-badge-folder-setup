// create a function that will take an ARRAY of numbers and will return the average.

function averageNumbers(arrayOfNumbers){

    //have a loop run through the array
    //everytime it goes through the array we need to keep track of a total and add the current array value
    let total = 0
    arrayOfNumbers.forEach(number => total = total + number)

    // const average = total/arrayOfNumbers.length

    return total / arrayOfNumbers.length;

}

let testArrayOfNumbers = [5,5,5,5,20,35]

console.log(averageNumbers(testArrayOfNumbers));

let people = [
    {name: "John", age: 29},
    {name:"Ginger", age: 38}
];

let justNames = people.map(person => person.name);

console.log(justNames);

let justAge = people.map(person => person.age);

console.log(justAge);

function averageAge(arrayOfAges) {
    let total = 0;
    arrayOfAges.forEach(number => total = total + number)
    return total / arrayOfAges.length;
}

let testArrayOfAges = [29, 38]
console.log(averageAge(justAge));


//weather help

const weather = require("./json/weather.json");

// console.log(weather.week[0].day);

// console.log(weather.week[0].high);
// console.log(weather.week[1].high);
// console.log(weather.week[2].high);
// console.log(weather.week[3].high);
// console.log(weather.week[4].high);

//use a for loop and go through all the highs

for (let i = 0; i < weather.week.length; i++) {
    console.log(weather.week[i].high);
}

//create a function that will grab all the highs and return the highs in an array

function getHighs(){
    const highs = weather.week.map(day => day.high)
    // console.log(highs);
    return highs
}
// console.log the average temp from the weather object
getHighs();
const highArray = getHighs();

console.log(averageNumbers(highArray));
//or
console.log(averageNumbers(getHighs()));

//create a function that will grab all the lows and return the lows in an array

function getLows(){
    const lows = weather.week.map(day => day.low)
    console.log(lows);
    return lows
}

getLows();

function getCloudCover(){
    const cloudCover = weather.week.map(day => day["cloud-cover"])
    console.log(cloudCover);
    return cloudCover
}

getCloudCover();