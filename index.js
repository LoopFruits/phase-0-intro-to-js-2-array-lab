// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(Ralph){
    cats.push(Ralph);
}

function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
    console.log('result:', Bob)
}

function destructivelyRemoveLastCat(){
    cats.pop(2);
//     console.log('result', cats);
 } 


function destructivelyRemoveFirstCat(){
    cats.shift(); // 0 works as an argument as well
    console.log('result', cats);
}

// (append) add a name to the end of the array and return a new array, leaving the OG unchanged

function appendCat() {
    const copyCats = [...cats, 'Broom']
    return copyCats;
}


//they want me to remove the first cat from the cats array(prepend) and return a new array 

function prependCat(){
    console.log('line26:', cats);
    const newCats = ['Arnold', ...cats]
    return newCats
}


//re move the last cat in the cats array and retunr a new array, leaving the cats array unchanged 

function removeLastCat(){
    console.log('start: ', cats)
    const removeLastCat = cats.slice(0,-1);
    console.log('end: ', removeLastCat)
    return removeLastCat
}

function removeFirstCat(){
    const catsCats = cats.slice(1)
    return catsCats
}