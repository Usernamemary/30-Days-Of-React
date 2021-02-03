//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

//Option backtick character - comillas invertidas

let age= prompt('Enter your age')

if (age>18) {
  alert('You are old enough to drive')
} else { 
   alert(`You need to wait ${18 - parseInt(age)} years to drive`  )
}


 // Option JS basic 
let age= prompt('Enter your age')

if (age>18) {
  alert('You are old enough to drive')
} else { 
   alert('You need to wait' + (18 - parseInt(age)) + ' years to drive'  )
}

  //2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

  let myAge = 30
  let yourAge = prompt ('Enter your age')

if (myAge > yourAge) { `I am ${myAge - yourAge} years older than you`
} else {
  `You are ${yourAge - myAge} years older than me`
}

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

let b = 6 
let a = 8

//3.1. using if else

if (a>b) {
  `${a} is greater than ${b}`
} else {
  `${a} is less than ${b}`
}

//3.2. ternary operator.
let b = 6 
let a = 8

a>b
? `${a} is greater than ${b}`
: `${a} is less than ${b}`

// //4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// Enter a number: 2
// 2 is an even number

let number = prompt('Enter a number')
if (number%2==0) {
  `${number} is an even number`
} else {
  `${number} is an odd number`
}

//***LEVEL 2***

//1. Write a code which can give grades to students according to theirs scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// // 0-49, F

let score= prompt('Enter your score')

if (score>=90 && score<=100) {
  `Your score is A`
  
} 
else if (score>=70 && score<=89)
{
  `Your score is B`
} 
else if (score>=60 && score<=69)
{
  `Your score is C`
} 
else if (score>=50 && score<=59)
{
  `Your score is D`
} 
else  
{
  `Your score is F`
}

//2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let season = prompt('Write a month (Ex: January)')

switch (season) {
  case 'September':
  case 'October':
  case 'November': 
  console.log(`The season is Autumn.`);
  
    break;
  case 'December':
  case 'January':
  case 'February':
  
  console.log(`The season is Winter`);
  break;
  case 'March':
  case 'April':
  case 'May':
    
  console.log(`The season is Spring`);
  break;
  
  case 'June':
  case 'July':
  case 'August':
    
  console.log(`The season is Summer`);
  break;
  
  default:
    console.log (`That's is not a month`);
    break;
}
//3. Check if a day is weekend day or a working day. Your script will take day as an input.



// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.


let answer = prompt('What is the day today?')
let day = answer[0].toUpperCase() + (answer.slice(1,answer.length)).toLowerCase()

if (day==('Saturday' || 'Sunday')) {
  `${day} is a weekend`
  
} else if  (day==('Monday' || 'Tuesday' || 'Wednesday' || 'Thursday' || 'Friday'))
 {

  `${day} is a working day`

} else{
  `That is not a day lol`
}
// *** LEVEL 3 *** //

//1. Write a program which tells the number of days in a month.

// Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

let answer = prompt('Enter a month')
let month = answer[0].toUpperCase() + (answer.slice(1,answer.length)).toLowerCase()

if (month==('January' || 'March' || 'May' || 'July' || 'August' || 'October' || 'December')) {
  `${month} has 31 days`
  
} 
else if  (month==('April' || 'June' || 'September' || 'November'))
{
  `${month} has 30 days`

} 
else if  (month=='February')
{

 `${month} has 28 days`

}
else
{
  `That is not a month lol`
}

//2. Write a program which tells the number of days in a month, now consider leap year.
let answer = prompt('Enter a month')
let year = prompt('Enter a year')

let month = answer[0].toUpperCase() + (answer.slice(1,answer.length)).toLowerCase()


if (month==('January' || 'March' || 'May' || 'July' || 'August' || 'October' || 'December')) {
  `${month} has 31 days`
  
} 
else if  (month==('April' || 'June' || 'September' || 'November'))
{
  `${month} has 30 days`

} 

else if  (month=='February' && (parseInt(year))%4==0)
{

 `${month} has 29 days`

}
else if  (month=='February' && (parseInt(year))%4!==0)
{

 `${month} has 28 days`

}

else
{
  `That is not a month`
}


