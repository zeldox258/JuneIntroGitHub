
let husrev = 55;
const omer = 75;


console.log(husrev , omer);

husrev = 15;
console.log(husrev , omer);
//omer = 25;
console.log(husrev , omer);



console.log(typeof(husrev) + " <-> " + typeof(omer));



console.log(Number("12.00000001000000010000000100000000000000000000000001"));

console.log(Number("12.000000010000000100000001000000000000s00000000000001"));


console.log(Boolean(-1));





console.log(10 + 10 + 10 + "25" + (10 + 10 + 10 +"10"));


console.log(25 + 25 + "10" +14);

console.log(10 + 20 - "10" + 15 + 25 - "5" * "3");

console.log(10 + 20 - "10" + 15 + 25 + "5" * "3");


//



console.log(15*5 === "15" * "5");
console.log(15*5 === 15 * "5");
console.log(15*5 === "15" * 5);
console.log(15*5 === 15 * 5);
console.log("////////////");
console.log(15*5 == "15" * "5");
console.log(15*5 == 15 * "5");
console.log(15*5 == "15" * 5);
console.log(15*5 == 15 * 5);


console.log("SUM OPERATION");

console.log(15+5 === "15" + "5");
console.log(15+5 === 15 + "5");
console.log(15+5 === "15" + 5);
console.log(15+5 === 15 + 5);
console.log("////////////");
console.log(15+5 == "15" + "5");
console.log(15+5 == 15 + "5");
console.log(15+5 == "15" + 5);
console.log(15+5 == 15 + 5);





console.log(true && false || true && false || true && false || false);



//If statements

let age = 55;


if(age >= 18 && age < 35){
    console.log("You can join the team");
}
else if(age >= 35){
    console.log("You are too old to join team");
}
else if(age >= 35){
    console.log("You are too old to join team");
}
else if(age >= 35){
    console.log("You are too old to join team");
}
else if(age >= 35){
    console.log("You are too old to join team");
}
else if(age >= 35){
    console.log("You are too old to join team");
}
else if(age >= 35){
    console.log("You are too old to join team");
}
else if(age >= 35){
    console.log("You are too old to join team");
}
else{
    console.log("You are too young to join team");
}


let message = "Hello Kutay";

if(message == "Hello Kutay"){
    console.log(message);
}



if(age >= 35){
    console.log("You are too old to join team");
}
if(age >= 35){
    console.log("You are too old to join team");
}
if(age >= 35){
    console.log("You are too old to join team");
}
if(age >= 35){
    console.log("You are too old to join team");
}
if(age >= 35){
    console.log("You are too old to join team");
}
if(age >= 35){
    console.log("You are too old to join team");
}
if(age >= 35){
    console.log("You are too old to join team");
}
if(age >= 35){
    console.log("You are too old to join team");
}
if(age >= 35){
    console.log("You are too old to join team");
}
else{

}


if(1){
    console.log("First step");
    if(1){
        console.log("Second step");
        if(1){
            console.log("Last step");
        }
    }
}


if(0){
    console.log("selim");
}


let choice = 15;


switch(choice){
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;

    case 4:
        console.log("4");
        break;

    case 5:
        console.log("5");
        break;

    case 6: 
        console.log("6");
        break;

    default:
        console.log("7");

}


console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
console.log(11);
console.log(12);
console.log(13);
console.log(14);
console.log(15);
console.log(16);
console.log(17);
console.log(18);
console.log(19);
console.log(20);

//i++ // => i = i+1
// i += 1
//for while

/*
for(let i = 0 ; i < 2100 ; i++ ){
    console.log(i);
}
*/



let i = 0;
for( ; ; i++){

    if(i % 5 == 0){
        continue;
    }
    console.log(i);
    
    if( i >= 40){
        break;
    }

}

// 1 3 5 7 9 11 13 15 17 19 ... ... 105

for(let i = 1; i <= 105; i+=2) {
    console.log(i);
}

// 1 4 7 13 16 19 22 28 31
for(let i = 1; i <= 31; i+=3) {
    if (i % 5 ==0) {
        continue;
    }
    console.log(i);
}

//1 den 200 e kadar bastir  eger sayi 3 ile tam bolunuyosa "Fizz" 5 ile tam bolunuyosa "Bomm"
//hem 3 hem 5 ile tam bolunuyosa "FizzBomm"
//1 2 Fizz 4 Bomm Fizz . . .. 14 FizzBomm
console.log("///////////////////////////////////////////////////////////////////////////////");
for(let i=1; i<=200; i++){
    
    if (i%15 ==0)
        console.log("FizzBuzz");
    else if (i% 3 ==0)
        console.log("Fizz");
    else if  (i% 5 ==0)
        console.log("Buzz");
    else 
        console.log(i);
}

// let 3 e tam bolunen ve let 4 e tam bolunen
// 500 e kadar loop. loopun icinde bir sey bastirmiyoruz
//loopun sonunda "1 dan 500 e kadar 3 e tam bolunen sayilarin adedi : ${} 5 e tab bolunen satilarin adedi : ${}"


let count3 = 0 , sumCount3 = 0;
let count5 = 0 , sumCount5 = 0;

for (let i = 1; i<= 500; i++){
    if(i%3 === 0) {
        count3++;
        sumCount3 += i;
    }

    if(i%5 === 0) {
        count5++
        sumCount5 += i;
    }
}

console.log(`3e bolunen sayisi ${count3} -- 5e bolunen sayisi ${count5}`);
console.log(`3e bolunen sayilarin toplami: ${sumCount3} -- 5e bolunen sayilarinToplami ${sumCount5}`);
console.log(`3ler orani ${sumCount3 / count3} -- 5ler orani ${sumCount5 / count5}`);



/*
-
--
---
----
-----
------
-------
--------
*/

let res = ""

for(let i=0; i<=10; i++){
    
    console.log(res);
    res+="-";


}


for(let i=0; i<=10; i++){
    console.log("-".repeat(i));
}


/*
-
--
---
----
-----
------
-------
--------
-------
------
-----
----
---
--
-
*/

console.log("////////////");



for(let i=0; i<=10; i++){
    console.log("-".repeat(i));
}
for(let j=10; j >= 0; j--){
    console.log("-".repeat(j));
}


console.log("////////////");

for(let i=0; i<=20; i++){

    console.log("-".repeat(i));
    
}

res = "";
let limit = 50;

for(let i=0; i<=limit; i++){
    
    if (i<=limit/2) {
        console.log("-  ".repeat(i));
        
    }
    else{
        console.log("-  ".repeat(limit - i));
       
    }
}
