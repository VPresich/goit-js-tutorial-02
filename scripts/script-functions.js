let fnA = function(){
    console.log("Function A");
    return 0;
}

const fnB = function(){
    console.log("Function B");
}

const fnC = function(){
    console.log("Function C");
    fnA();
    const value = 10;
    console.log(value);
}

const funTotal = function(items){
    let total = 0;
    console.log(items.length);
    for (const item of items){
        total += item;
    }
    return total;
}

console.log(funTotal([3, 4, 5]));
console.log(funTotal([3]));

const findLogin = function(logins, loginToFind) {
    if (logins.includes(loginToFind)){
        return true;
    } 
    return false;
}

console.log(findLogin([3, 4, 5], 5));

const changeCase = function(inputStr) {
    const letters = inputStr.split("");
    let changedCaseStr = "";
    console.log(changedCaseStr);
    console.log(letters);
    for (const letter of letters) {
        const isInUpperCase = (letter === letter.toUpperCase());
        changedCaseStr += isInUpperCase ? letter.toLowerCase() : letter.toUpperCase();
    }    
    console.log(inputStr);
    return changedCaseStr;
}

console.log("qqqEEE");
console.log(changeCase("qqqEEE"));

const slugify = function(inputStr) {   
    console.log(inputStr);
    return inputStr.toLowerCase().split(" ").join('-');
}

console.log(slugify("Wod2 Word1"));

function add() {
    let total = 0;
    // const numArray = Array.from(arguments);
    const numArray = [...arguments];
    console.log(numArray);
    for (let i = 0; i < arguments.length; i += 1){
        total += arguments[i]; 
    }
    console.log(`Total1 = ${total}`);
    console.log(arguments);
    total = 0;
    for (const elem of numArray) {
        total += elem;
    }
    console.log(arguments);
    console.log(`Total2 = ${total}`);
    return total;
}

console.log(add(1, 2, 3, 4, 5));

function printContacts(names, phones) {
    console.log(typeof (names));
    names = names.toUpperCase();
    // names = names.split(",");
    // phones = phones.split(",");
    console.log(names);
    console.log(phones);
}
let names = "name1, name2, name3, name4";
const phones = "phone1, phone2, phone3, phone4";
printContacts(names, phones);

console.log(names);
console.log(phones);

printContacts(names, phones);

console.log(names);
console.log(phones);