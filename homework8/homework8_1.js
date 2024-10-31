function capitalizeStrings(strings){
    return strings.map( str => str.charAt(0)
    .toUpperCase() + str.slice(1).toLowerCase());
}
const words = ["apple", "banaNA", "kiWi", "ORANGE"];
const capitalizedWords = capitalizeStrings(words);

console.log(capitalizeStrings(words));