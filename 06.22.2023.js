console.log("Hello");



//name , age,  gender

const person1 = {
    name: "Husrev",
    age: 29,
    gender: "male"
}

const person2 = {
    name: "Deniz",
    age: 18,
    gender: 'male'
}

const person3 = { 
    name: "Emre",
    age: 23,
    gender: "male"
}

const person4 = { 
    name: "Omer",
    age: 53,
    gender: "male"
}


//console.log(person1, person2, person3);


let peopleArray = [person1,person2,person3,person4];

function findOldest(people){

    if(people.length == 0) return -1;
    
    let oldest = people[0];
    for(let i = 0; i < people.length; i++) {
        if(oldest.age < people[i].age) {
            oldest = people[i];
        }

    }

    return {name:oldest.name+"2" , age:oldest.age, gender:oldest.gender};
}


/*
const person1 = {
    age: 29,
}
const person2 = {
    age: 18,
}
const person3 = { 
    age: 23,
}
*/

//br
let oldestPerson = findOldest(peopleArray);

console.log(oldestPerson);//29
oldestPerson.age = 21;
console.log(oldestPerson);//21
console.log(person1);//29 21
console.log(person2);//18
console.log(person3);//23
console.log(person4);//23

//peopleArray[3] = oldestPerson;




function findYoungest(people){

    if(people.length == 0) return -1;
    
    let youngest = people[0];
    for(let i = 0; i < people.length; i++) {
        
        if(youngest.age > people[i].age) {
            youngest = people[i];
        }

    }

    return {name:youngest.name+"2" , age:youngest.age, gender:youngest.gender};
}





let youngestPerson = findYoungest(peopleArray);
console.log(youngestPerson);


//age
function findAvarageAge(people){

    if(people.length == 0) return 0;


    let totalAge = 0;
    for(let i = 0 ; i < people.length; i++){
        
        totalAge += people[i].age;
    }


    return totalAge / people.length;

}


let avarageAge = findAvarageAge(peopleArray);
console.log(avarageAge);

/*

Sayıların aritmetik ortalaması hesaplanır.

Her bir sayının aritmetik ortalamadan farkı bulunur.
Bulunan farkların her birinin karesi hesaplanır.
Farkların kareleri toplanır.

Elde edilen toplam, serinin eleman sayısının bir eksiğine bölünür.
Bulunan sayının karekökü alınır.


*/

function sp(people){
    let avarageAge = findAvarageAge(peopleArray);
    let totalSquares = 0;

    for(let i = 0 ; i < people.length; i++){
        let dif = people[i].age - avarageAge;
        let squareVersion = dif * dif;
        totalSquares += squareVersion;
    }

    totalSquares /= (people.length-1);

    return Math.sqrt(totalSquares);


}


console.log(sp(peopleArray));


let weightsArray = [80,93,70,108,69,81];


function carryCap(limit, weights){

    let totalWeight = 0;
    weights.sort((a, b) => a - b);

    //console.log(weights)
    for(let i = 0 ; i < weights.length;i++){
        if(totalWeight + weights[i] > limit) return i;
        totalWeight+= weights[i];
    }
    return weights.length;
}

console.log(carryCap(501,weightsArray));




/*
    omer   = 1 sn 60is 
    mert   = 1 sn 30is
    husrev = 1 sn 20is 
    emre   = 1 sn 10is 
*/




function totalTimeAndWorkers(workNum){//300




}



/*
    1. 100
    2. 50
    3. 25
    4. 10
    5. 1
*/


function buildL(length){
    let dpArr = [1,1];

    for(let i = 2;i<= length;i++){
        dpArr[i] = dpArr[i-1]+1; 
        
        if(i >10){
            dpArr[i] = Math.min(dpArr[i-10]+1,dpArr[i]); 
        }
        if(i >25){
            dpArr[i] = Math.min(dpArr[i-25]+1,dpArr[i]); 
        }
        if(i >50){
            dpArr[i] = Math.min(dpArr[i-50]+1,dpArr[i]); 
        }

        if(i >100){
            dpArr[i] = Math.min(dpArr[i-100]+1,dpArr[i]); 
        }
        

    }

    return dpArr[length];

}


console.log(buildL(95958));
buildL(758); //700 - 58 - 50 1 1 1 1 1 1 1 1 //16
             //700 - 58 - 25 10 10 10 1 1 1  //14































