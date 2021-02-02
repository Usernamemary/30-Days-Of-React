
//Solutions from Array exercises
//2. First remove all the punctuations and change the string to array and count the number of words in the array


  let text =
  'I love teaching and empowering people I teach HTML CSS JS React Python'

  text = text.split(' ')
  console.log(text)
  console.log(text.length)

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart.splice(4,1)

//concatenate
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack =frontEnd.concat(backEnd)

console.log(fullStack)

//Level 3.js
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Sort the array and find the min and max age
ages.sort()

//Find the median age(one middle item or two middle items divided by two) 
let medianAge= (ages[5] + ages[6])/2

//Find the average age(all items divided by number of items) - Find the range of the ages(max minus min)
let averageAge= (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9])/ages.length
console.log(averageAge)

// - Find the range of the ages(max minus min)

console.log(26-19)

//Compare the value of (min - average) and (max - average), use abs() method

Math.abs(19-averageAge)
Math.abs(averageAge-19)