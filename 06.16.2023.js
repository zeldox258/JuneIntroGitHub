console.log("Hello");



let isPrimeNum = 83;

i = 2

let flag = true;

if(isPrimeNum < 2) flag = false;

while(isPrimeNum > i){
    if(isPrimeNum % i == 0){
        flag = false;
        break
    }
    i++
}

//console.log(flag ? "This number is a prime." : "This number is not a prime");



function isPrime(num){
    if(num < 2) return false;
    let i = 2


    while(num > i){
        if(num % i == 0){
            return false;
        }
        i++
    }


    return true;
}



//let result = isPrime(81);
console.log(isPrime(81) ? "This number is a prime." : "This number is not a prime");

console.log(typeof(isPrime));
console.log(typeof(isPrime(81)));



// sum two parameter num1 num2  => num1+num2;

function sum(num1, num2){

    if(isNaN(Number(num1))   ||  isNaN(Number(num2))){
        return "You must pass Number values!!!";
    }

    if(Math.abs(num1) == Infinity && Math.abs(num2) == Infinity)
        return "You can't pass infinity values!!!";

        
    let result = Number(num1) + Number(num2);
    if(isNaN(result)){
        return "Somehow you got NaN result we don't know why";
    }

    return result;
}


console.log("5 + 6 =",sum("5","68"));

console.log(sum(-Infinity,-Infinity));
console.log(sum(true,-true));
console.log(sum(Infinity,-5));
console.log(sum(Infinity,5));



console.log(Infinity + 5);
console.log(Infinity - 5);


// subtract  two parameter num1 num2  => num1-num2;

function sub(num1, num2) {
    
    if(isNaN(Number(num1))   ||  isNaN(Number(num2))){
        return "You must pass Number values!!!";
    }

    if(Math.abs(num1) == Infinity && Math.abs(num2) == Infinity)
        return "You can't pass infinity values!!!";

        
    let result = num1 - num2;
    if(isNaN(result)){
        return "Somehow you got NaN result we don't know why";
    }

    return result;
}





function subConsole(num1, num2) {
    
    if(isNaN(Number(num1))   ||  isNaN(Number(num2))){
        console.log("You must pass Number values!!!");
        return ;
    }

    if(Math.abs(num1) == Infinity && Math.abs(num2) == Infinity){
        console.log("You can't pass infinity values!!!");
        return ;
    }
        
    let result = num1 - num2;
    if(isNaN(result)){
        return "Somehow you got NaN result we don't know why";
    }
    console.log(`${num1} - ${num2} = ${result}`);
    return ;
}







console.log("56 - 6 =",sub("56","6"));
subConsole(56,"1");


let msg = "Mert";
console.log(msg);




// multiply  two parameter num1 num2  => num1*num2;
function multiply(num1, num2) {
    
    if(isNaN(Number(num1))   ||  isNaN(Number(num2))){
        console.log("You must pass Number values!!!");
        return ;
    }

    if(Math.abs(num1) == Infinity && Math.abs(num2) == Infinity){
        console.log("You can't pass infinity values!!!");
        return ;
    }
        
    let result = num1 * num2;
    if(isNaN(result)){
        return "Somehow you got NaN result we don't know why";
    }
    console.log(`${num1} * ${num2} = ${result}`);
    return ;
}


multiply(15,"10");


// divide  two parameter num1 num2  => num1/num2;

function divide(num1, num2) {

    if(Number(num2) === 0) {
        console.log("Second parameter cannot be 0")
        return;
    }
    
    if(isNaN(Number(num1))   ||  isNaN(Number(num2))){
        console.log("You must pass Number values!!!");
        return ;
    }

    if(Math.abs(num1) == Infinity && Math.abs(num2) == Infinity){
        console.log("You can't pass infinity values!!!");
        return ;
    }
        
    let result = num1 / num2;
    if(isNaN(result)){
        return "Somehow you got NaN result we don't know why";
    }
    console.log(`${num1} / ${num2} = ${result}`);
    return ;
}


divide(15,9498);





//Kutay
function fact1(num){
    if(isNaN(Number(num))){
        //console.log("You must pass Number value!!!");
        return -1;
    }

    if(Math.abs(num) == Infinity){
        //console.log("You can't pass infinity value!!!");
        return -1;
    }
    if(num < 0){
        return -1;
    }
    if(num == 0)
        return 1;
    

    // - deger olamaz.
    //0 geldiyse 1 dondurmemiz gerek




    let i = 1;
    let result = 1;
    while(i <= num){
        result = result * i;
        i++;

    
    }
    return result;
}


//Muhammed
function fact2(num){
    if(isNaN(Number(num))){
        //console.log("You must pass Number values!!!");
        return -1;
    }
    if(num == Infinity){
        //console.log("You can't pass infinity value!!!");
        return Infinity;
    }
    if(Number(num) < 0) {
        return -1;
    }
    if(Number(num) == 0) {
        return 1;
    }
    // - deger olamaz.
    //0 geldiyse 1 dondurmemiz gerek


    let i = 1;
    let result = 1;
    while(i <= num) {
        result *= i;
        i++;
    }
    return result;
}


console.log(fact1("5"),fact2(Infinity));







