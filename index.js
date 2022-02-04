// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(Ralph){
    cats.push(Ralph);
}

function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
}

function destructivelyRemoveLastCat(){
    cats.pop(2);
//     console.log('result', cats);
 } 


function destructivelyRemoveFirstCat(){
    cats.shift(); // 0 works as an argument as well
    console.log('result', cats);
}


