// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];



function findMatching(drivers, string){



const result = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
  return result;
}

// function fuzzyMatch(drivers, string) {
//     let splitString = string.split('')
//  const fuzzyMatches = drivers.filter( driver => {
//         let splitDriver = driver.split('')
//         splitDriver[0].toLowerCase() === splitString[0].toLowerCase()
// })
//     return fuzzyMatches;
// }

function fuzzyMatch(drivers, string) {
    const fuzzyMatches = drivers.filter( driver =>
      driver.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
    return fuzzyMatches;
  }

  function matchName(drivers, string) {
    
    const match = drivers.filter(driver => driver.name === string)
  return match;
}

  