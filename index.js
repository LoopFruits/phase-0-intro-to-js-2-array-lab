// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield"
];

function destructivelyAppendCat(Ralph) { 
    cats.push("Ralph");
}

function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(Garfield) {
    cats.pop();
}

function destructivelyRemoveFirstCat(Milo) {
    cats.shift();
}

function appendCat(Broom) {
    const copycats = [...cats, "Broom"];
    return copycats;
}

function prependCat(Arnold) {
    const copycats = [ "Arnold", ...cats];
    return copycats;
}

function removeLastCat() {
    const removeLastCat = cats.slice(0, -1);
    return removeLastCat;
}

function removeFirstCat() {
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;
}
