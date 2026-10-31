let data;
data = 0; // falsy
data = ''; // falsy
data = '0'; // truthy
data= true; // truthy
data= false; // falsy
data=  null; // falsy
if (data) {
    console.log('Truthy');

}
else {
    console.log("Falsy")
};

let price = 22;
if(price){
    console.log("Price is Truthy");
};
let balance = 0;
if(!balance){ // logical not operator
    console.log("Balance is Truthy");
};

let value = 5;
if(!!value){ // double not operator
    console.log("Truthy")
}