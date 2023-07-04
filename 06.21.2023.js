
let randValue = Math.floor(Math.random() * 90 + 10);
//Math.getRandomInt();
console.log(randValue);

function sum(){

}


let sum1 = function(){
    console.log("Selam");
}

sum1();


let sum2 = () => {return 5};
let sum3 = (num) => 5 + num;

//(0°C × 9/5) + 32 = 32°F



let cellToFah = (cel) => (cel * 9/5) + 32;


console.log(cellToFah(900))


let myArr1 = [1,2,3,4,5,6]
let myArr2 = [1,2,3,4,5,6, 7]

//Write a function that checks if two arrays are equal (have the same elements in the same order).

let ifEqual = (arr1, arr2) => {
    let i = 0
    if(arr1.length != arr2.length){
        return false;
    }

    while(i < arr1.length ){
        if(arr1[i] != arr2[i]){
             return false
        }
    i++
    }

    return true;
}


console.log(ifEqual(myArr1,myArr2));



function calculator(num1,num2,operation){
    return operation(num1,num2);
}



let sum4 = (num1,num2)=> num1+num2;
let result = calculator(1,2,sum4);

console.log(result);


let result1 = calculator(1,2, (num1,num2) => num2-num1 );

console.log(result1);


let deneme123 = () =>{console.log("Selamlar innerInterval");}

//setTimeout setInterval
/*
setTimeout(()=>{console.log("Selamlar after 10 + two seconds")},12000);

console.log("bloklandim mi");


let myInterval = setInterval(deneme123,5000);

//console.log(myInterval);



setTimeout(()=>{
    console.log("Selamlar BB interval");
    clearInterval(myInterval);
},22000);
*/


function myWatch(){

    let second = 0;
    let minutes = 0;

    let myIntervalClock = setInterval(()=>{
        second++;
        if(second == 60) {
            second = 0;
            minutes++;
        }

        console.log(`Minutes: ${minutes}, Seconds: ${second}`);
    },1000)



}

//myWatch();



//interval 2.5 suleyman is best.  17.7saniye sonra dursun.

let myInterval2 = setInterval(() =>{ console.log("suleyman is best")},2500)


setTimeout(()=>{ clearInterval(myInterval2)  },17500);



//1 saniye i milisecondda artcak, hours.


function myWatch2(){

    let second = 0;
    let minutes = 0;
    let hours = 0;

    let myIntervalClock = setInterval(()=>{
        second++;
        if(second == 60) {
            second = 0;
            minutes++;
        }
        if(minutes == 60) {
            minutes = 0
            hours++
        }

        console.log(`Hours: ${hours}, Minutes: ${minutes}, Seconds: ${second}`);
    },1)

}

//myWatch2()




let myObject = 
{
    age:21,
    name:"Furkan",
    lastname:"Boyraz"
}

console.log(typeof(myObject),typeof(myObject.name));







