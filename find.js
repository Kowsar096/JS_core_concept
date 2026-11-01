const students = [
    { name: 'Jamal', age: 20 },
    { name: 'kamal', age: 23 },
    { name: 'salam', age: 25 },
    { name: 'akbar', age: 27 },
    { name: 'selim', age: 38 },
    { name: 'khaled', age: 45 },
];

const student = students.find(std => std.name[0] === 's');
console.log(student);