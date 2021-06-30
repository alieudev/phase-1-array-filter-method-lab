function findMatching(array, driver) {
    return array.filter(elem => elem.toLowerCase() === driver.toLowerCase())
}

function fuzzyMatch(array, letters) {
    let len = letters.length;
    return array.filter(name => name.slice(0,len) == letters)
}

function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string)
}