
//I made these using the console.
//Sometimes I opened a new tab and paste the const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'] again.
//Because you can't write the same const again.

// 1. empty array
const arr = Array()
const emptyArray = []

// 2. array with more than 5 numbers

const arrayOfSixNumbers = [1,2,3,4,5,6]
console.log(arrayOfSixNumbers)

// 3. Length array

console.log(arrayOfSixNumbers.length)

// 4.Get first, middle and last items

const firstItem = arrayOfSixNumbers[0]
//En este caso sería el número a la mitad más aproximado
const middleItem = arrayOfSixNumbers[parseInt(parseInt(arrayOfSixNumbers.length-1)/2)]
const lastItem = arrayOfSixNumbers[arrayOfSixNumbers.length-1]
console.log(firstItem, middleItem, lastItem)

// 5. Different Data Types

const mixedDataTypes = ['string', 1, true, null, {name: 'Jesus', lastName: 'Croix'},  ]
console.log(mixedDataTypes)

//6. itCompanies
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//7. console.log
console.log(itCompanies)

//8. Print number of Companies
console.log(itCompanies.length)

//9. Print First Company, Middle and Last Company
const firstCompany = itCompanies[0]
const middleCompany = itCompanies[parseInt(parseInt(itCompanies.length-1)/2)]
const lastCompany = itCompanies[itCompanies.length-1]

console.log(firstCompany, middleCompany, lastCompany)

// 10 Print Out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

// 11. Uppercase
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())


//12. Print array like a sentence 
itCompanies.pop()
console.log(itCompanies)
const printEachCompany = itCompanies.join(', ')
console.log(printEachCompany + ' and Amazon are big IT companies.') 

// 13. Check if a certain company exists in the itCompanies array.
itCompanies.push('Amazon')
console.log(itCompanies)

let index= itCompanies.indexOf('AT&T')

if (index !=-1) {
  console.log('That is a big IT company')
} else {
  console.log ('That name is not in the array')
}
// 14. Filter out companies which have more than one 'o' without the filter method.

itCompanies.splice(0,3)
console.log(itCompanies)

// 15. Sort the array using sort() method
itCompanies.sort()

// 16. Reverse the array using reverse() method
itCompanies.reverse()

// 17. Slice out the first 3 companies from the array
itCompanies.slice(0,3)

// 18. Slice out the last 3 companies from the array
// If you want to slice from the last item you use negative numbers.
itCompanies.slice(-3)

// 19. Slice out the middle IT company or companies from the array
itCompanies.slice(3,4)

// 20. Remove the first IT company from the array
itCompanies.shift()
// 21. Remove the middle IT company or companies from the array
// Splice is used for removing
itCompanies.splice(3,1)

// 22. Remove the last IT company from the array
itCompanies.pop()

// 23. Remove all IT companies
itCompanies.splice(0, itCompanies.length)