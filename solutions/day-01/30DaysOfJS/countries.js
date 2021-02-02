//Solutions from Array exercises

const countries =[ 'Albania',
'Bolivia',
'Canada',
'Denmark',
'Ethiopia',
'Finland',
'Germany',
'Hungary',
'Ireland',
'Japan',
'Kenya']
if (countries.indexOf('Ethiopia') != -1) {
  console.log('Ethiopia')
} else {
  countries.push('Ethiopia')
}

// 1.Slice the first ten countries from the countries array

countries.slice(0,10)
console.log(countries)
// Find the middle country(ies) in the countries array
let a = parseInt(countries.length/2)
let middleCountries = countries[a]

console.log(middleCountries)
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
countries.length
countries.unshift('Australia')
console.log(countries)
const countriesOne = countries.slice(0,6)
const countriesTwo = countries.slice(6,12)

