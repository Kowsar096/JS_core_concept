// inner function can access variable from outer function

let pi = 3.1416; // we can access this anywhere

function add(a, b) {
    const factor = 0.5;
    const result = (a + b) * factor + pi;
    const value = addTwo(result);
    function addTwo (num){
        num= num + pi;
        return num +2
    }
    return value
    

}
// console.log(factor); // Referenceerror: factor is not defined. factor is only accessible within the add function

// addTwo();  // Referenceerror
const value = add(5,3);
console.log(value);

const multiply = (a,b) =>{
    console.log(result); // Cannot access 'result' before initialization

    //TDZ=  temporal dead zone
    const result = a*b;
    return result;
};
multiply(2,5); // Cannot access 'result' before initialization