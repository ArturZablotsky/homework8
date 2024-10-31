function analizeArray(numbers) {
    const sum = numbers.reduce((total, num) => total + num);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
return {
    sum: sum,
    average: average,
    min: min,
    max: max
    };
}
const numbers = [1, 2, 3, 4, 5];
const analized = analizeArray(numbers);

console.log(analized);