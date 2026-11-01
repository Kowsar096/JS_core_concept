const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const friend = ['jamal', 'kamal', 'selim', 'jarif', 'nahid', 'nasib'];
const NFriend = friend.filter(frd => frd[0] === 'n');
console.log(NFriend);

const students = [
    { name: 'Jamal', age: 20 },
    { name: 'kamal', age: 23 },
    { name: 'salam', age: 25 },
    { name: 'akbar', age: 27 },
    { name: 'selim', age: 38 },
    { name: 'khaled', age: 45 },
];
const olderStudent = students.filter(std => std.age > 30);

console.log(olderStudent);