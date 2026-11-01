const numbers = [1, 2, 3, 4, 5];

// const doubled = [];
// for (const num of numbers) {
//     doubled.push(num * 2);
// }

// const doubleIt = num => num*2;
// const doubled = numbers.map(doubleIt);


const doubled = numbers.map(num => num * 2);
const squared = numbers.map(num => num * num);

console.log(doubled, squared);

const friend = ['jamal', 'kamal', 'selim', 'jarif'];
const firstLetters = friend.map(frd => frd[0].toUpperCase())
console.log(firstLetters);

const product = [
    {name: 'laptop', price: 45000},
    {name: 'phone', price: 25000},
    {name: 'tablet', price: 35000}
]

const prices = product.map(pd => pd.price);

const names = product.map((pd,index,productsArray)=>{
    const upperCaseName = pd.name.toUpperCase();
    console.log(index, upperCaseName, productsArray);
    return upperCaseName
})

console.log(names);