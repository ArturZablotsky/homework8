function findCommonElements(arr1, arr2){
    return arr1.filter(element => arr2.includes(element));
};
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(arr1, arr2);

console.log(commonElements);