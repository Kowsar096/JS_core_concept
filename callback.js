// document.getElementById('#btn').addEventListener('click', function(event){
    
// })


function settleLife(name, isBCS, marriageCallback, bride) {
    if (isBCS) {
        marriageCallback(name, bride);
    } else {
        console.log(`${name} is still preparing for BCS!`);
    }
}

function agree(name, bride) {
    console.log(`${name} says: "Yes, I agree to marry ${bride}!"`);
}

settleLife('Toaml', true, agree, 'a woman');